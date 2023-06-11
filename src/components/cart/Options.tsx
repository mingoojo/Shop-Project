import styled from 'styled-components';
import { OrderOption } from '../../types';

type OptionsProps = {
  options : OrderOption[]
}

const Container = styled.div`
  margin-top: .5rem;
  font-size: 1.4rem;
`;

export default function Options({ options }:OptionsProps) {
  if (!options.length) {
    return (
      null
    );
  }

  const text = options
    .map((option) => `${option.name}: ${option.item.name}`)
    .join(', ');
  return (
    <Container>
      (
      {text}
      )
    </Container>
  );
}
