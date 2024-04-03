import styled from 'styled-components';
export const ProfileContainer = styled.section`
  background-color: #eee;
  padding: 20px;

  .btn-icon {
    position: absolute;
    bottom: 0;
    right: 80px;
    color: green;
    cursor: pointer;
    z-index: 2;
    font-size: 24px;
    @media only screen and (min-width: 768px) {
      right: 250px;
    }
    @media only screen and (min-width: 1024px) {
      right: 110px;
    }
  }
  .university-info-container {
    padding-top: 20px;
    display: block;
    @media only screen and (min-width: 768px) {
      display: flex;
    }
  }
  .text-muted2 {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .btn-icon {
    position: absolute;
  }
`;
export const DeleteIcon = styled.a`
  position: absolute;
  z-index: 9999;
  right: 10px;
  top: 10px;
  fill: red;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    fill: #01e45c;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
