import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';
export const SearchInput = styled.input`
  display: flex;
  width: 60% !important;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const SearchIcon = styled(CiSearch)`
  width: 2em !important;
  height: 2em !important;
  margin-right: 5px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversitiesItemName = styled.p`
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    width: 88px;
    margin-bottom: 0px;
  }
  @media only screen and (min-width: 1024px) {
    width: 169px;
  }
`;
export const ErrorMessage = styled.div`
  color: #2b2b2b;
  text-align: center;
  font-family: 'Montserrat';
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 20px;

  @media only screen and (min-width: 768px) {
    margin-top: 35px;
  }
  @media only screen and (min-width: 1024px) {
  }
  & p {
    margin-top: 20px;
  }
`;
