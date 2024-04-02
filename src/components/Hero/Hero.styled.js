import styled from 'styled-components';

export const HeroContainer = styled.section`
  padding-top: 25px;
  background: #f8f8f8;
  @media only screen and (min-width: 768px) {
    padding-top: 67px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1024px) {
    padding-top: 0px;
  }
`;

export const HeroTitle = styled.h1`
  color: #2b2b2b;
  font-family: 'Montserrat';
  font-size: 26px;
  font-style: normal;
  font-weight: 900;
  line-height: 40px;
  margin-bottom: 12px;
  @media only screen and (min-width: 768px) {
    font-size: 36px;
    font-weight: 900;
    max-width: 366px;
    line-height: 44px;
  }
  @media only screen and (min-width: 1024px) {
    line-height: normal;
    max-width: 450px;
  }
`;

export const BottomText = styled.p`
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 12px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 0px;
    max-width: 351px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 18px;
    line-height: 30px;
    max-width: 545px;
  }
`;
export const HeroImg = styled.img`
  width: 100%;
  object-fit: cover;
  @media only screen and (min-width: 768px) {
    width: 500px;
  }
  @media only screen and (min-width: 1024px) {
    width: 750px;
    height: 555px;
  }
`;
