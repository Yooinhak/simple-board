import Head from "next/head";
import styled, { keyframes } from "styled-components";
import Table from "@components/Table";
import { atomKeyMap } from "@modules/atomMap";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>Simple_board</title>
      </Head>
      <Wrapper>
        <Table />
      </Wrapper>
    </>
  );
}

Home.getInitialProps = async () => {
  let posts = [];
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    posts = await response.json();
  } catch (err) {
    console.log(err);
  }

  return {
    [atomKeyMap.postList]: posts,
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
