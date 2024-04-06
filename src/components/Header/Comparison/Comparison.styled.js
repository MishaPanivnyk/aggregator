import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Link = styled(NavLink)`
  position: relative;
  .comparison-count {
    border-radius: 50%;
    position: absolute;
    background: #00d254;
    width: 20px;
    height: 20px;
    color: #fff;
    font-family: 'Poppins';
    font-size: 15px;

    font-style: normal;
    font-weight: 900;
    line-height: normal;
    top: 4px;
    right: 4px;
    text-align: center;
  }
  @media only screen and (min-width: 768px) {
    padding: 21px;
  }
`;
