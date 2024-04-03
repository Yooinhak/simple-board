import styled, { keyframes } from "styled-components";

interface Props {
  size: string;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isOpen: boolean;
  children: React.ReactNode;
}

const Component = ({ size, onBackdropClick, isOpen, children }: Props) => {
  return (
    <Wrapper>
      <Backdrop onClick={onBackdropClick} />
      <ModalBox>{children}</ModalBox>
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

const ModalBox = styled.div`
  width: 600px;
  height: 400px;
  min-width: 200px;
  position: relative;
  z-index: 10002;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;

  animation: ${FadeIn} 0.3s ease;
`;

export default Component;
