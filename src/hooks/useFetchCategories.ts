import { container } from 'tsyringe';
import { useEffectOnce } from 'usehooks-ts';
import { useStore } from 'usestore-ts';
import CategoriesStore from '../store/CategoriesStore';
import { Category } from '../types';

export default function useFetchCategories(): {
  categories: Category[];
  } {
  const store = container.resolve(CategoriesStore);

  const [{ categories }] = useStore(store);

  useEffectOnce(() => {
    store.fetchCategories();
  });

  return { categories };
}
