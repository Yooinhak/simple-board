import { postListAtom } from "./post/atom";

const atomKeyMap = Object.freeze({
  postList: postListAtom.key,
});

const atomMap = {
  [atomKeyMap.postList]: postListAtom,
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
