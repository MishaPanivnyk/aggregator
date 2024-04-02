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

export const ModalContainer = styled.div`
  z-index: 99999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 320px;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0px 16px 24px -8px rgba(16, 24, 40, 0.03),
    0px 48px 64px -16px rgba(16, 24, 40, 0.08);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.closing {
    animation: ${fadeOut} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media only screen and (min-width: 768px) {
    width: 520px;
  }
  @media only screen and (min-width: 1024px) {
    width: 620px;
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
export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  background: linear-gradient(90deg, #2ecc71 50%, #27ae60 95.49%);
  margin-bottom: 15px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const ModalLabel = styled.label`
  color: #334e68;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 10px;
  padding-left: 5px;
`;
export const ModalBtn = styled.button`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  padding: 15px;
  border-radius: 22px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid #01e45c;
  width: 48%;
  margin-top: 20px;
  cursor: pointer;
  background-color: #01e45c;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 40, 0.05);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 15px;
  justify-content: center;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #01e45c;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const ModalInput = styled.input`
  margin-bottom: 20px;
  border-radius: 12px;
  background: #f0f4f8;
  border: none;
  padding: 15px;
  width: 100%;
`;
export const CloseButton = styled.a`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  top: 20px;
  right: 25px;
  position: absolute;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
  }
  &:hover,
  &:focus {
    fill: red;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &svg {
  }
`;
export const ModalDesc = styled.p`
  color: #486581;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  & button {
    color: #127fbf;
    font-weight: 700;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const ModalBtnLogaut = styled.button`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  padding: 15px;
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
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
