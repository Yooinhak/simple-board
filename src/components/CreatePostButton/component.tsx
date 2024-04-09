import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import useModal from "@hooks/useModal";
import Form from "@components/Form";
import { useForm } from "react-hook-form";
import { FancyInputWidthController } from "@components/FancyInput";
import { useSetRecoilState } from "recoil";
import { postListAtom } from "@modules/post/atom";

interface CreatePostData {
  title: string;
  contents: string;
}

const Component = () => {
  const form = useForm();
  const { open, close, ModalWrapper } = useModal("xs");
  const setPostList = useSetRecoilState(postListAtom);

  const handleCreatePost = async (data: CreatePostData) => {
    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          categoryIds: ["6614f2a69db52eda97317b9f"],
        }),
      });
      const postsResponse = await fetch("/api/posts");
      const posts = await postsResponse.json();
      setPostList(posts);
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
        <Form form={form} onSubmit={handleCreatePost}>
          <FancyInputWidthController name={"title"} />
          <FancyInputWidthController name={"contents"} />
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

export default Component;
