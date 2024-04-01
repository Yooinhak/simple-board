import FancyButton from "@components/FancyButton";
import { Category } from "@interfaces/category";
import { categoryListAtom } from "@modules/category/atom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const Component = () => {
  const categories = useRecoilValue(categoryListAtom);
  return (
    <Wrapper>
      <FancyButton label={"전체"} />
      {categories.map((category: Category) => (
        <FancyButton label={category.name} key={category.id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Component;
