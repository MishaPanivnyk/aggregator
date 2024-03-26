import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { NavLink } from 'react-router-dom';
export const ScrollableContainer = styled(PerfectScrollbar)`
  height: 80px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  .ps__rail-x {
    height: 5px;
    background-color: transparent;
    opacity: 1;
  }

  .ps__thumb-x {
    height: 5px;
    background-color: transparent;
    border-radius: 4px;
  }

  &:hover .ps__rail-x,
  &:focus .ps__rail-x {
    background-color: #f1f1f1;
  }

  &:hover .ps__thumb-x,
  &:focus .ps__thumb-x {
    background-color: #bdbdbd;
  }

  .ps__thumb-x:hover,
  .ps__thumb-x:focus {
    height: 7px;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 22px;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 32px;
  }
`;
export const UniversitiesContainer = styled.section`
  .mb-0 {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .page-link {
    color: #2b2b2b;
  }
  .page-link.active,
  .active > .page-link {
    color: #fff;
    background-color: #01e45c;
  }
  padding-top: 50px;
  padding-bottom: 50px;
  @media only screen and (min-width: 768px) {
    padding-bottom: 30px;
  }
  @media only screen and (min-width: 1024px) {
    padding-top: 62px;
    padding-bottom: 71px;
  }
`;
export const UniversitiesTitle = styled.h2`
  color: #2b2b2b;
  text-align: center;
  font-family: 'Poppins';
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 26px;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 19px;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 29px;
  }
`;
export const DirectionList = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const DirectionItem = styled.li`
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  padding: 5px 15px;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversitiesListContainer = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const UniversitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
  }
`;
export const UniversitiesItem = styled.li`
  padding: 25px;
  border-radius: 5px;
  border: 1px solid #f0f0f0;
  background: #fff;

  @media only screen and (min-width: 768px) {
    padding: 20px;
    padding-right: 30px;
    display: flex;
    gap: 30px;
    align-items: center;
  }
  @media only screen and (min-width: 1024px) {
    gap: 70px;
    height: 180px;
    padding: 15px 40px;
  }
`;
export const ButtonMore = styled(NavLink)`
  padding: 13px 48px;
  color: #8c8c8c;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  border-radius: 100px;
  border: 1px solid #d7d7d7;
  background: #fff;
  margin-top: 40px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #00d254;
    color: #fff;
    border: 1px solid #00d254;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversitiesItemImg = styled.img`
  width: 50%;
  object-position: center;
  object-fit: contain;
  @media only screen and (min-width: 768px) {
    width: 10%;
    height: 100%;
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversitiesItemRating = styled.p`
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 7px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversitiesItemReviews = styled.p`
  color: #00c213;
  font-family: 'Open Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  margin-bottom: 50px;
  @media only screen and (min-width: 768px) {
    line-height: 16px;
    margin-bottom: 0px;
  }
  @media only screen and (min-width: 1024px) {
    line-height: 27px;
  }
`;
export const UniversitiesItemLocation = styled.p`
  & svg {
    margin-right: 10px;
  }
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    width: 211px;
  }
`;
export const UniversitiesItemPrice = styled.p`
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 1024px) {
    width: 169px;
  }
`;
export const UniversitiesItemBtnContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 0px;
    align-items: center;
  }
  @media only screen and (min-width: 1024px) {
    margin-left: auto;
  }
`;
export const UniversitiesItemBtnLinkSite = styled(NavLink)`
  color: #fff;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  border-radius: 100px;
  background: #01e45c;
  padding: 7px 23px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 132px;
  &:hover,
  &:focus {
    color: #fff;
    background-color: rgb(34, 37, 42);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversitiesItemBtnLinkId = styled(NavLink)`
  padding: 7px 23px;
  color: #2b2b2b;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  border-radius: 100px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #2b2b2b;
  width: 132px;
  &:hover,
  &:focus {
    background: #00d254;
    color: #fff;
    border: 1px solid #00d254;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversitiesItemaAddCompare = styled.button`
  color: #8c8c8c;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  & svg {
    margin-right: 3px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversitiesItemFeaturesContainer = styled.div`
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    margin-left: auto;
  }
`;
export const UniversitiesItemFeatures = styled.p`
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 18px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
