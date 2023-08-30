import styled from '@emotion/styled';
import { PostsContext } from 'contexts/Posts';
import { Button } from 'components/Button';
import { useContext, useState } from 'react';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Contents = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  flex-direction: column;
`;
const Title = styled.div`
  margin-bottom: 16px;
  font-size: 1%.2rem;
  font-weight: bold;
`;
const InputGroup = styled.div`
  margin-bottom: 16px;
`;
const Label = styled.div`
  font-size: 1.2rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
`;
const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Form = () => {
  const { onAdd, toggleOpen } = useContext(PostsContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const onChangeBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.currentTarget.value);
  };
  const onSubmitForm = async () => {
    if (title === '' || body === '') return;
    setLoading(true);
    const data = await (
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 1,
          title,
          body,
        }),
      })
    ).json();

    onAdd(data);
    setLoading(false);
    setTitle('');
    setBody('');
    toggleOpen();
  };
  return (
    <Container>
      <Background />
      <Contents>
        <Title>블로그 글 등록</Title>
        <InputGroup>
          <Label>Title</Label>
          <Input value={title} onChange={onChangeTitle} />
        </InputGroup>
        <InputGroup>
          <Label>Body</Label>
          <Input value={body} onChange={onChangeBody} />
        </InputGroup>
        <Actions>
          <Button text={loading ? '등록중..' : '등록하기'} onClick={onSubmitForm} />
          <Button text="닫기" color="#304FFE" onClick={toggleOpen} />
        </Actions>
      </Contents>
    </Container>
  );
};
