import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    padding-left: 50px;
  }
  & img {
    width: 30px;
    height: 30px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media only screen and (min-width: 768px) {
      margin-right: 0px;
      width: 40px;
      height: 40px;
    }
  }

  & span {
    color: #2b2b2b;
    font-family: 'Montserrat';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 10px;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  &:hover img {
    transform: scale(1.2);
  }
`;

export const LogoContainer = styled.div`
  &:hover {
    & img {
      transform: scale(1.2);
    }
    /* & span {
      font-size: 16px;
    } */
  }

  &:focus {
    & img {
      transform: scale(1.2);
    }
    /* & span {
      font-size: 16px;
    } */
  }
`;
