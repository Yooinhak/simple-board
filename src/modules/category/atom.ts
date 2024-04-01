import { Category } from "@interfaces/category";
import { atom } from "recoil";

export const categoryListAtom = atom<Category[]>({
  key: "CATEGORY_LIST",
  default: [],
});
