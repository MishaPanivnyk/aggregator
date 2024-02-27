import styled, { keyframes } from 'styled-components';
export const HeaderBox = styled.header`
  width: 100%;
  z-index: 7;
`;
export const Section = styled.div`
  padding-top: 19px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 21px;
  justify-content: space-around;
  @media only screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 20px;
  }
  @media only screen and (min-width: 1024px) {
    padding-top: 26px;
    padding-bottom: 17px;
  }
`;
export const NavBox = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
  }
`;
const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const ModalMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  gap: 20px;
  padding-top: 40px;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  z-index: 1000;
  animation: ${slideInAnimation} 0.3s ease-in-out;
`;
export const HeaderIconClose = styled.a`
  z-index: 1002;
  position: absolute;
  top: 20px;
  right: 20px;
`;
