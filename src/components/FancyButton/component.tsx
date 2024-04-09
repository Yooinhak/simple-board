import styled from "styled-components";

interface Button {
  label: string;
}

const Component = ({ label }: Button) => {
  return (
    <Button>
      <Label>{label}</Label>
    </Button>
  );
};

const Button = styled.button`
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  background-color: #fff;
  background-image: linear-gradient(315deg, #fff 0%, #c797eb 74%);
  line-height: 42px;
  padding: 0;
  border: none;

  &::before,
  &::after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: #c797eb;
    transition: all 0.3s ease;
  }

  &::before {
    height: 0%;
    width: 2px;
  }
  &::after {
    width: 0%;
    height: 2px;
  }

  &:hover {
    background: transparent;
    &::before {
      height: 100%;
    }
    &::after {
      width: 100%;
    }
  }
`;
const Label = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  &::before,
  &::after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: #c797eb;
    transition: all 0.3s ease;
  }
  &::before {
    width: 2px;
    height: 0%;
  }
  &::after {
    height: 2px;
    width: 0%;
  }
  &:hover {
    color: #c797eb;
    &::before {
      height: 100%;
    }
    &::after {
      width: 100%;
    }
  }
`;

export default Component;
