import styled from '@emotion/styled';
import React from 'react';

interface PostsProps {
  userId: string;
  id: string;
  title: string;
  body: string;
}
const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow:
    10px 10px 30px #d9d9d9,
    -10px -10px 30px #ffffff;
  max-width: 800px;
  width: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Body = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const BlogPost = ({ title, body }: PostsProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};

export default React.memo(BlogPost);
