import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }
`;

export const ModalBtnLogaut = styled.button`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  padding: 5px;
  border-radius: 22px;
  border: 4px solid #01e45c;
  width: 100%;
  cursor: pointer;
  background-color: #01e45c;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 40, 0.05);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 15px;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #01e45c;
    transform: translate(0, -3px);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const ModalLogoutContainer = styled.div`
  position: absolute;
  top: 45px;
  right: -57px;
  border: 1px solid rgb(139, 170, 54);
  border-radius: 8px;
  padding: 18px;
  width: 160px;
  background-color: white;
  @media only screen and (min-width: 1024px) {
  }
`;
export const ModalConfirmContainer = styled.div`
  z-index: 99999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 44px 24px;
  width: 320px;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0px 16px 24px -8px rgba(16, 24, 40, 0.03),
    0px 48px 64px -16px rgba(16, 24, 40, 0.08);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.closing {
    animation: ${fadeOut} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media only screen and (min-width: 768px) {
    width: 480px;
  }
  @media only screen and (min-width: 1024px) {
    width: 500px;
  }
`;
export const ConfirmButton = styled.button`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  padding: 5px;
  border-radius: 6px;
  border: 4px solid #01e45c;
  width: 100%;
  cursor: pointer;
  height: 50px;
  background-color: #01e45c;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 40, 0.05);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 15px;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #01e45c;
    transform: translate(0, -3px);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media only screen and (min-width: 768px) {
    height: 60px;
  }
  @media only screen and (min-width: 1024px) {
    width: 500px;
  }
`;
export const CancelButton = styled.button`
  color: rgb(35, 38, 42);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  padding: 5px;
  border-radius: 6px;
  border: 4px solid rgb(217, 217, 217);
  width: 100%;
  height: 50px;
  cursor: pointer;
  background-color: rgb(217, 217, 217);
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 40, 0.05);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 15px;
  &:hover,
  &:focus {
    color: #fff;
    background-color: red;
    transform: translate(0, -3px);
    border: 4px solid red;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media only screen and (min-width: 768px) {
    height: 60px;
  }
  @media only screen and (min-width: 1024px) {
    width: 500px;
  }
`;
export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const ModalConfirmTitle = styled.p`
  font-family: 'Montserrat';
  font-weight: 600;
  margin-bottom: 24px;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-align: center;
  @media only screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;
