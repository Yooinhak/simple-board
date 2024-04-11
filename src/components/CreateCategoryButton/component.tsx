import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import useModal from "@hooks/useModal";
import Form from "@components/Form";
import { useForm } from "react-hook-form";
import { FancyInputWidthController } from "@components/Input";
import { useSetRecoilState } from "recoil";
import { categoryListAtom } from "@modules/category/atom";

interface CreateCategoryData {
  name: string;
}

const Component = () => {
  const form = useForm();
  const { open, close, ModalWrapper } = useModal("xs");
  const setCategories = useSetRecoilState(categoryListAtom);

  const handleCreateCategory = async (data: CreateCategoryData) => {
    try {
      await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const categoriesResponse = await fetch("/api/categories");
      const categories = await categoriesResponse.json();
      setCategories(categories);
      close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledButton onClick={open}>
        <FaPlus size={12} />
      </StyledButton>

      <ModalWrapper>
        <Title>카테고리 생성</Title>
        <Form form={form} onSubmit={handleCreateCategory}>
          <FancyInputWidthController name={"name"} />
          <button type={"submit"}>만들기!</button>
        </Form>
      </ModalWrapper>
    </>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  color: #fff;
  background: linear-gradient(-45deg, #fdab61, #c97bcc, #50bec9);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  background: linear-gradient(#fdab61, #c97bcc, #50bec9);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default Component;
