import styled from '@emotion/styled';

interface IContainerProps {
  readonly color: string;
}

const Container = styled.button<IContainerProps>`
  border: 0;
  color: #ffffff;
  background-color: ${(props) => props.color};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.color};
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
interface IButtonProps {
  text: string;
  onClick?: () => void;
  color?: string;
}
export const Button = ({ text, onClick, color = '#ff5722' }: IButtonProps) => (
  <Container color={color} onClick={onClick}>
    {text}
  </Container>
);
