import styled from "styled-components";

const Component = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ttt1</Th>
          <Th>ttt2</Th>
          <Th>ttt3</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>ddd1</Td>
          <Td>ddd2</Td>
          <Td>ddd3</Td>
        </Tr>
        <Tr>
          <Td>aaa1</Td>
          <Td>aaa2</Td>
          <Td>aaa3</Td>
        </Tr>
        <Tr>
          <Td>bbb1</Td>
          <Td>bbb2</Td>
          <Td>bbb3</Td>
        </Tr>
        <Tr>
          <Td>bbb1</Td>
          <Td>bbb2</Td>
          <Td>bbb3</Td>
        </Tr>
        <Tr>
          <Td>bbb1</Td>
          <Td>bbb2</Td>
          <Td>bbb3</Td>
        </Tr>
        <Tr>
          <Td>bbb1</Td>
          <Td>bbb2</Td>
          <Td>bbb3</Td>
        </Tr>
        <Tr>
          <Td>bbb1</Td>
          <Td>bbb2</Td>
          <Td>bbb3</Td>
        </Tr>
        <Tr>
          <Td>bbb1</Td>
          <Td>bbb2</Td>
          <Td>bbb3</Td>
        </Tr>
        <Tr>
          <Td>bbb1</Td>
          <Td>bbb2</Td>
          <Td>bbb3</Td>
        </Tr>
        <Tr>
          <Td>bbb1</Td>
          <Td>bbb2</Td>
          <Td>bbb3</Td>
        </Tr>
        <Tr>
          <Td>bbb1</Td>
          <Td>bbb2</Td>
          <Td>bbb3</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;

  border: 2px solid #b1b1b1;
`;
const Thead = styled.thead`
  display: table;
  width: 100%;

  border-bottom: 2px solid #b1b1b1;
`;
const Tbody = styled.tbody`
  display: block;
  max-height: 200px;
  overflow-y: scroll;

  & > tr {
    display: table;
    width: 100%;
    border-bottom: 1px solid #b1b1b1;
  }
`;
const Tr = styled.tr``;
const Th = styled.th`
  padding: 20px 15px;
`;
const Td = styled.td`
  padding: 15px;
`;

export default Component;
