import getConfig from "next/config";
import Head from "next/head";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Table from "@components/Table";

export default function Home() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <>
      <Head>
        <title>Simple_board</title>
      </Head>
      <Wrapper>
        {/* <button onClick={fetchPosts}>test</button>
        <button onClick={createPost}>만들기</button>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={contents} onChange={(e) => setContents(e.target.value)} /> */}
        <Table />
      </Wrapper>
    </>
  );
}

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
