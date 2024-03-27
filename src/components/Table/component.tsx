import { Post } from "@interfaces/post";
import { postListAtom } from "@modules/post/atom";
import { useRouter } from "next/router";
import { Suspense, useState } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import styled from "styled-components";

const Component = () => {
  const router = useRouter();

  // ATOM
  const postList = useRecoilValue(postListAtom);
  // ATOM [E]

  return (
    <Wrapper>
      <button
        onClick={() => {
          router.replace({
            pathname: router.pathname,
            query: router.query,
          });
        }}
      >
        검색
      </button>
      <TableHeader>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>제목</th>
              <th>콘텐츠</th>
            </tr>
          </thead>
        </Table>
      </TableHeader>
      <TableContent>
        <Table>
          <tbody>
            {postList.map((post: Post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.contents}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Table = styled.table`
  width: 100%;
  table-layout: fixed;

  th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
  }
  td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 12px;
    color: #fff;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
  }
`;
const TableHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
`;
const TableContent = styled.div`
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export default Component;
