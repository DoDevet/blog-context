import styled from '@emotion/styled';
import BlogPost from 'components/BlogPost';
import { Header } from 'components/Header';
import { useContext } from 'react';
import { Button } from 'components/Button';
import { Form } from 'components/Form';
import { PostsContext } from 'contexts/Posts';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  align-items: center;
  overflow: auto;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

function App() {
  const { posts, toggleOpen, open } = useContext(PostsContext);

  return (
    <Container>
      <Header title="블로그 포스트" />
      {posts?.map((post) => <BlogPost key={post.id} {...post} />)}
      <ButtonContainer>
        <Button text="등록" onClick={toggleOpen} />
      </ButtonContainer>
      {open && <Form />}
    </Container>
  );
}

export default App;
