import styled from 'styled-components';

export const ComparisonContainer = styled.section`
  background-color: #eee;
  padding-top: 60px;
  padding-bottom: 35px;

  @media only screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media only screen and (min-width: 1024px) {
    padding-left: 200px;
    padding-right: 200px;
  }
  .title-center {
    text-align: center;
  }
  .img-university {
    /* width: 100%; */
    display: flex;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    width: 100px;
    height: 100px;
    @media only screen and (min-width: 1024px) {
    }
  }
`;
export const ComparisonTitle = styled.h1`
  color: #2b2b2b;
  text-align: center;
  font-family: 'Montserrat';
  font-size: 26px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;

  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    line-height: 44px;
    margin-bottom: 30px;
    font-size: 36px;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 50px;
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
    padding-bottom: 20px;
  }
`;
