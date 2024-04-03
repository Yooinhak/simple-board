import { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
  id: string;
  value: string;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | ((event: ChangeEvent<HTMLInputElement>) => void);
}

const Component = ({ id, value, onChange }: Props) => {
  return <Input id={id} value={value} onChange={onChange} />;
};

const Input = styled.input`
  color: #000;
  border-style: none;
  outline: none;
  width: 100%;
  padding: 0.8em 1em;
  border: 0.25em solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(120deg, #fdab61 0%, #c97bcc 50%, #50bec9 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 1.8em;
  background-size: 200% 100%;
  transition: background-position 0.8s ease-out;

  &:hover {
    background-position: 100% 0;
  }
`;

export default Component;
