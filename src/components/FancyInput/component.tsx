import styled from "styled-components";

const Component = () => {
  return (
    <Wrapper>
      <Label>title</Label>
      <Input />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @supports (mix-blend-mode: darken) {
    position: relative;
    mix-blend-mode: lighten;

    & > label {
      position: absolute;
      left: 3em;
      top: -0.28em;
      background: #000;
    }
  }
`;
const Label = styled.label`
  padding: 0 0.5em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  font-size: 0.875em;
  letter-spacing: 0.1em;
  color: rgba(255, 220, 255, 0.6);
  cursor: pointer;
`;
const Input = styled.input`
  color: #fff;
  font-size: 1.25rem;
  line-height: 1;
  border-style: none;
  outline: none;
  height: calc(1em + 1.6em + 0.5em);
  width: 100%;
  padding: 0.8em 1em;
  border: 0.25em solid transparent;
  background-image: linear-gradient(#000, #000),
    linear-gradient(120deg, #f09 0%, #0ff 50%, #9f0 100%);
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
