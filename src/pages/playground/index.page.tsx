import { testAtom } from '@modules/post/atom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

export const getServerSideProps = async ({}) => {
  let posts = [];
  try {
    const response = await fetch('http://localhost:3000/api/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    posts = await response.json();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      initialData: {
        posts,
      },
    },
  };
};

const Page = () => {
  const test = useRecoilValue(testAtom);
  console.log(test);
  return <div>test</div>;
};

export default Page;
