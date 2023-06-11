import useProductFormStore from '../../hooks/useProductFormStore';
import { ChangeFunction } from '../../types';
import Option from './Option';

export default function Options() {
  const [{ options, selectedOptionItems }, store] = useProductFormStore();
  const handleChange: ChangeFunction = ({ optionId, optionItemId }) => {
    store.changeOptionItem({ optionId, optionItemId });
  };
  return (
    <div>
      123
      {options.map((option, index) => (
        <Option
          key={option.id}
          option={option}
          selectedItem={selectedOptionItems[index]}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}
