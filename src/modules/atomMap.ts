import { categoryListAtom } from "./category/atom";
import { postListAtom } from "./post/atom";

const atomKeyMap = Object.freeze({
  postList: postListAtom.key,
  categoryList: categoryListAtom.key,
});

const atomMap = {
  [atomKeyMap.postList]: postListAtom,
  [atomKeyMap.categoryList]: categoryListAtom,
};

const atomHydrator = ({ initialData, recoilSetter }: any) => {
  Object.keys(atomMap).forEach((key) => {
    if (initialData[key] !== undefined) {
      recoilSetter(atomMap[key], initialData[key]);
    }
  });
};

export { atomHydrator, atomKeyMap };

export default atomMap;
