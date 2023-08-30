import styled from '@emotion/styled';

interface HeaderProps {
  title: string;
}

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: calc(100% - 40px);
`;
const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Header = ({ title }: HeaderProps) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};
