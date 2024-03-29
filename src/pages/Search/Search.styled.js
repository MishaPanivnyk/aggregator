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
