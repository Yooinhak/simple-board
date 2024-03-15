import { Post } from "@interfaces/post";
import { postsAtom } from "@modules/post/atom";
import { Suspense, useState } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import styled from "styled-components";

const Component = () => {
  const [query, setQuery] = useState({});
  const posts = useRecoilValueLoadable(postsAtom(query));

  if (posts.state === "loading") return <div>loading...</div>;

  return (
    <Wrapper>
      <TableHeader>
        <Table cellPadding={0} cellSpacing={0} border={0}>
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
        <Table cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            {posts.contents.map((post: Post) => (
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
