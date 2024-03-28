import styled, { keyframes } from "styled-components";

const Component = () => {
  return (
    <Wrapper>
      <Background />
      <Loader />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
`;

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const PrixClipFix = keyframes`
  0% {
    clip-path: polygon(50% 50%,0 0,0 0,0 0,0 0,0 0);
  }
  25% {
    clip-path: polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0);
  }
  50% {
    clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%);
  }
  100% {
    clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0);
  }
`;

const Loader = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: ${Rotate} 1s linear infinite;

  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: ${PrixClipFix} 2s linear infinite;
  }

  &::after {
    border-color: #ff3d00;
    animation: ${PrixClipFix} 2s linear infinite,
      ${Rotate} 0.5s linear infinite reverse;
    inset: 6px;
  }
`;

export default Component;

// .loader {
// width: 48px;
// height: 48px;
// border-radius: 50%;
// position: relative;
// animation: rotate 1s linear infinite
// }
// .loader::before , .loader::after {
// content: "";
// box-sizing: border-box;
// position: absolute;
// inset: 0px;
// border-radius: 50%;
// border: 5px solid #FFF;
// animation: prixClipFix 2s linear infinite ;
// }
// .loader::after{
// border-color: #FF3D00;
// animation: prixClipFix 2s linear infinite , rotate 0.5s linear infinite reverse;
// inset: 6px;
// }

// @keyframes rotate {
//   0%   {transform: rotate(0deg)}
//   100%   {transform: rotate(360deg)}
// }

// @keyframes prixClipFix {
//     0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
//     25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
//     50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
//     75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
//     100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
// }
