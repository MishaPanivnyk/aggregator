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
  .text-muted2 {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
