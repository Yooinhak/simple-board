import styled, { keyframes } from "styled-components";
import Table from "@components/Table";
import { atomKeyMap } from "@modules/atomMap";
import CategoryItems from "@components/CategoryItems";
import getConfig from "next/config";

export default function Home({}) {
  return (
    <Wrapper>
      <Box>
        <LeftSection>
          <CategoryItems />
        </LeftSection>

        <RightSection>
          <Table />
        </RightSection>
      </Box>
    </Wrapper>
  );
}

Home.getInitialProps = async () => {
  const { apiHost } = getConfig().publicRuntimeConfig;

  let posts = [];
  let categories = [];
  try {
    const response = await fetch(`${apiHost}/posts`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    posts = await response.json();

    const categoriesResponse = await fetch(`${apiHost}/categories`);
    categories = await categoriesResponse.json();
  } catch (err) {
    console.log(err);
  }

  return {
    [atomKeyMap.postList]: posts,
    [atomKeyMap.categoryList]: categories,
  };
};

const Gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  background: linear-gradient(-45deg, #fdab61, #c97bcc, #50bec9);
  background-size: 400% 400%;
  animation: ${Gradient} 5s ease infinite;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0px;
  padding: 32px;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  border-radius: 8px;
  background-color: #f8f9fd;
  box-shadow: 0 0 16px #555;
`;
const LeftSection = styled.div`
  padding: 8px;

  border-right: 1px solid #000;
`;
const RightSection = styled.div`
  width: 100%;
  padding: 8px;
`;
