import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  object-fit: cover;
  background: transparent;

  & img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const AvatarContainer = styled.div`
  position: relative;
`;
