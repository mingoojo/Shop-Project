import { useRef } from 'react';
import styled from 'styled-components';

type ComboBoxProps<T> = {
  label : string
  selectedItem: T
  items: T[]
  itemToId: (item: T) => string
  itemToText: (item: T) => string
  onChange: (item: T|null) => void
}

const Container = styled.div``;

export default function ComboBox<T>({
  label, selectedItem, items, itemToId, itemToText, onChange,
}:ComboBoxProps<T>) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const selected = items.find((item) => itemToId(item) === value);
    onChange(selected ?? null);
  };
  return (
    <Container>
      <label>
        {label}
        <select onChange={handleChange} value={itemToId(selectedItem)}>
          {
            items.map((item) => (
              <option key={itemToId(item)} value={itemToId(item)}>
                {itemToText(item)}
              </option>
            ))
          }
        </select>
      </label>
    </Container>
  );
}
