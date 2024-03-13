import { Post } from "@interfaces/post";
import { atom, selector } from "recoil";

export const postsAtom = atom<Post[]>({
  key: "BOARD_ITEMS",
  default: [],
});

// export const addItemsAtom = selector({
//   key: "ADD_ITEM",
//   get: ({ get }) => {
//     const items = get(itemsAtom);
//     return items.join(",");
//   },
//   set: ({ get, set }, newValue) => {
//     const prevItems = get(itemsAtom);
//     set(itemsAtom, [...prevItems, newValue]);
//   },
// });

export const createPostAtom = selector({
  key: "CREATE_POST",
  get: ({ get }) => {},
  set: async ({ get, set }, body) => {
    try {
      const fetchRes = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...body }),
      });
      if (!fetchRes.ok) {
        throw new Error("Failed to create post");
      }
      const newPost = await fetchRes.json();
      console.log(newPost); // 새로 생성된 게시글을 콘솔에 출력 또는 UI에 표시
    } catch (error) {
      console.error(error);
    }
  },
});
