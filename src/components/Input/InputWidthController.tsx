import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";
import FancyInput from "./component";

interface Props {
  name: string;
}

const Component = ({ name }: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <FancyInput
            id={name}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        );
      }}
    />
  );
};

const Wrapper = styled.div``;

export default Component;
