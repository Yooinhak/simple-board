import { Post } from '@interfaces/post';
import { atom, selector, selectorFamily } from 'recoil';

export const testAtom = atom({
  key: 'POST_LIST',
  default: [],
});

export const postsAtom = selectorFamily({
  key: 'POSTS',
  get: (query) => async () => {
    try {
      const response = await fetch('/api/posts');
      const posts = await response.json();
      return posts;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
});

export const createPostAtom = selector({
  key: 'CREATE_POST',
  get: ({ get }) => {},
  set: async ({ get, set }, body) => {
    try {
      const fetchRes = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...body }),
      });
      if (!fetchRes.ok) {
        throw new Error('Failed to create post');
      }
      const newPost = await fetchRes.json();
      console.log(newPost); // 새로 생성된 게시글을 콘솔에 출력 또는 UI에 표시
    } catch (error) {
      console.error(error);
    }
  },
});

// async function fetchPosts() {
//   try {
//     const response = await fetch("/api/posts");
//     if (!response.ok) {
//       throw new Error("Failed to fetch posts");
//     }
//     const posts = await response.json();
//     console.log(posts); // 받아온 게시글들을 콘솔에 출력 또는 UI에 표시
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function createPost() {
//   try {
//     const response = await fetch("/api/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title,
//         contents,
//       }),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to create post");
//     }
//     const newPost = await response.json();
//     console.log(newPost); // 새로 생성된 게시글을 콘솔에 출력 또는 UI에 표시
//   } catch (error) {
//     console.error(error);
//   }
// }
