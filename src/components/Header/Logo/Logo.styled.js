import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  & img {
    width: 60px;
    height: 36px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-right: 80px;

    @media only screen and (min-width: 768px) {
      margin-right: 0px;
    }
  }

  &:hover img {
    transform: scale(1.2);
  }
`;

export const LogoContainer = styled.div``;
