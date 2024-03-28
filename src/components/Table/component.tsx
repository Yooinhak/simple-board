import { Post } from "@interfaces/post";
import { postListAtom } from "@modules/post/atom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const Component = () => {
  // ATOM
  const postList = useRecoilValue(postListAtom);
  // ATOM [E]

  return (
    <Wrapper>
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
          <Tbody>
            {postList.map((post: Post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.contents}</td>
              </tr>
            ))}
          </Tbody>
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
  border-collapse: collapse;

  th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #000;
    text-transform: uppercase;
  }
  td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 12px;
    color: #000;
  }
`;
const TableHeader = styled.div`
  background-color: #fff;
  border-bottom: 4px solid #eceffa;
  border-radius: 8px;
`;
const TableContent = styled.div`
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
`;
const Tbody = styled.tbody`
  & > tr {
    margin-bottom: 10px;
    border-bottom: 4px solid #f8f9fd;

    & > td {
      background-color: #fff;

      &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }
`;

export default Component;
