import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 20px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    margin-right: 0px;
  }
  @media only screen and (min-width: 1024px) {
    margin-right: 20px;
  }
  &.active {
    color: #00d254;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover,
  &:focus {
    color: #00d254;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
