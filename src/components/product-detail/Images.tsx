import styled from 'styled-components';
import { Image } from '../../types';

type ImagesProps = {
  images : Image[]
}

const Thumbnail = styled.img.attrs({
  alt: 'Product Image',
})`
  display : block;
  width : 100%;
  aspect-ratio: 1/1;
`;

export default function Images({ images }:ImagesProps) {
  const [image] = images;
  return (
    <Thumbnail src={`${image.url}`} />
  );
}
