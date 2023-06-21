import styled from 'styled-components';

type ButtonProps = {
  type? : 'button' | 'submit' | 'reset'
}

const Button = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type ?? 'button',
}))`
/* border : 2px solid #222; */
background: transparent;
color: ${((props) => (props.theme.colors.primary))};
cursor: pointer;

:disabled {
    filter: grayscale(80%);
    cursor: not-allowed;
}
`;

export default Button;
