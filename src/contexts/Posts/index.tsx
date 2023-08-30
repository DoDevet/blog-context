import { createContext, useEffect, useState } from 'react';

export interface PostProps {
  userId: string;
  id: string;
  title: string;
  body: string;
}
interface PostContext {
  posts: PostProps[];
  onAdd: (data: PostProps) => void;
  open: boolean;
  toggleOpen: () => void;
}
interface Props {
  children: React.ReactNode;
}
const PostsContext = createContext<PostContext>({
  posts: [],
  onAdd: (): void => {},
  open: false,
  toggleOpen: (): void => {},
});

const PostsContextProvider = ({ children }: Props) => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const responseData = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
      setPosts(responseData);
    };
    getData();
  }, []);
  const toggleOpen = () => setOpen((prev) => !prev);
  const onAdd = (data: PostProps) => {
    setPosts((prev) => [...prev, data]);
  };

  return (
    <PostsContext.Provider value={{ onAdd, posts, toggleOpen, open }}>
      {children}
    </PostsContext.Provider>
  );
};

export { PostsContextProvider, PostsContext };
