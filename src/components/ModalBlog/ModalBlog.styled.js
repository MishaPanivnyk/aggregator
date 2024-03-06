import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 10000;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  padding-top: 60px;
  position: relative;
  border-radius: 5px;
  max-width: 400px;
`;

export const CloseButton = styled.a`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  top: 10px;
  right: 15px;
  position: absolute;
  cursor: pointer;
  &:hover,
  &:focus {
    fill: red;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &svg {
    width: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

// export const TextArea = styled.textarea`
//   margin-bottom: 10px;
//   padding: 5px;
//   border: 1px solid #ccc;
//   border-radius: 3px;
// `;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: #01e45c;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
