import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const FooterBox = styled.footer`
  background: #000;
`;
export const Section = styled.section`
  padding-top: 44px;
`;
export const FooterLogo = styled(NavLink)`
  width: 100px;
  height: 100px;
  & img {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover img {
    transform: scale(1.2);
  }
`;
export const SocList = styled.ul`
  display: flex;
  gap: 22px;
  justify-content: center;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
export const SocItem = styled.li`
  cursor: pointer;
  fill: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const SocItemLink = styled.a`
  fill: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    fill: #01e45c;
  }
  @media only screen and (min-width: 768px) {
  }
`;
export const Copyright = styled.div`
  padding-top: 19px;
  border-top: 1px solid #2c2c2c;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    justify-content: space-around;
    flex-direction: initial;
  }
`;
export const CopyrightInfo = styled.p`
  color: #b5b5b5;
  text-align: center;
  font-family: 'Jost';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  margin-bottom: 6px;
`;
export const CategoryList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-bottom: 44px;
  @media only screen and (min-width: 768px) {
    align-items: initial;
    justify-content: space-between;
    flex-direction: initial;
    gap: 100px;
  }
  @media only screen and (min-width: 1024px) {
    gap: 220px;
    justify-content: center;
  }
`;
export const CategoryBoxItemLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;
export const CategoryItem = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    align-items: initial;
  }
`;
export const CategoryItemTitle = styled.h3`
  color: #fff;
  font-family: 'Open Sans';
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  display: flex;
  align-items: center;
  gap: 88px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
`;
export const CategoryItemLink = styled(NavLink)`
  color: #a6a6a6;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
`;
export const CopyrightDesc = styled.p`
  color: #b5b5b5;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const CopyrightDescTeam = styled(NavLink)`
  color: #b5b5b5;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  font-weight: 700;
  text-decoration: underline;
`;
export const FooterLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    align-items: center;
    flex-direction: initial;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1024px) {
    justify-content: space-around;
  }
`;
export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
`;
