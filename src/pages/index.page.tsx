import getConfig from "next/config";
import Head from "next/head";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Table from "@components/Table";

export default function Home() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  async function fetchPosts() {
    try {
      const response = await fetch("/api/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const posts = await response.json();
      console.log(posts); // 받아온 게시글들을 콘솔에 출력 또는 UI에 표시
    } catch (error) {
      console.error(error);
    }
  }

  async function createPost() {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          contents,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
      const newPost = await response.json();
      console.log(newPost); // 새로 생성된 게시글을 콘솔에 출력 또는 UI에 표시
    } catch (error) {
      console.error(error);
    }
  }

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
  background: linear-gradient(132deg, #fc415a, #591bc5, #212335);
  background-size: 400% 400%;
  animation: ${Gradient} 15s ease infinite;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0px;
  padding: 32px;
`;
