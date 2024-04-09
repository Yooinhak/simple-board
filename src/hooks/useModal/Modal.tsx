import styled, { css, keyframes } from "styled-components";

interface Props {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const Component = ({ size, onBackdropClick, children }: Props) => {
  return (
    <Wrapper>
      <Backdrop onClick={onBackdropClick} />
      <ModalBox $size={size}>{children}</ModalBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  height: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlurIn = keyframes`
  from {
    backdrop-filter: blur(0);
  }
  to {
    backdrop-filter: blur(3px);
  }
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10001;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;

  backdrop-filter: blur(3px);
  animation: ${BlurIn} 0.5s ease-in-out;
`;

const getModalBoxWidth = (size: string) => {
  switch (size) {
    case "xs":
      return "400px";
    case "sm":
      return "600px";
    case "md":
      return "800px";
    case "lg":
      return "968px";
    case "xl":
      return "1200px";
  }
};

const ModalBox = styled.div<{ $size: string }>`
  width: ${({ $size }) => getModalBoxWidth($size)};
  min-width: 200px;
  position: relative;
  z-index: 10002;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;

  animation: ${FadeIn} 0.3s ease;
`;

export default Component;
