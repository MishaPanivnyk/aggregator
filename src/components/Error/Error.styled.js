import styled from 'styled-components';

export const ErrorSection = styled.section`
  padding-top: 36px;
  @media only screen and (min-width: 768px) {
    padding-top: 76px;
  }
  @media only screen and (min-width: 1024px) {
    padding-top: 80px;
    padding-bottom: 50px;
  }
`;
export const ErrorTitle = styled.h1`
  color: #2b2b2b;
  text-align: center;
  font-family: 'Poppins';
  font-size: 26px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 17px;
  margin-bottom: 21px;
  @media only screen and (min-width: 768px) {
    margin-top: 35px;
    margin-bottom: 13px;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 32px;
    margin-bottom: 6px;
  }
`;
export const ErrorDesc = styled.p`
  color: #7e7e7e;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 85px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 68px;
  }
`;
export const ErrorIcon = styled.svg`
  display: block;
  margin: 0 auto;
`;
