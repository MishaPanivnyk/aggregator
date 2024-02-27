import styled from 'styled-components';

export const AdvantagesContainer = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media only screen and (min-width: 768px) {
    padding-top: 50px;
  }
  @media only screen and (min-width: 1024px) {
    padding-top: 52px;
    padding-bottom: 70px;
  }
`;
export const AdvantagesTitle = styled.h2`
  color: #2b2b2b;
  text-align: center;
  font-family: 'Poppins';
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 33px;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 44px;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 66px;
  }
`;
export const AdvantagesItemContainer = styled.ul`
  display: flex;
  gap: 34px;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: initial;
    gap: 45px;
  }
  @media only screen and (min-width: 1024px) {
    justify-content: center;
    gap: 70px;
  }
`;
export const AdvantagesItem = styled.li``;
export const AdvantagesIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  gap: 15px;
  @media only screen and (min-width: 768px) {
    gap: 20px;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 25px;
    gap: 25px;
  }
`;
export const AdvantagesItemTitle = styled.h3`
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  @media only screen and (min-width: 768px) {
    max-width: 140px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 20px;
    line-height: 27px;
    max-width: 160px;
  }
`;
export const AdvantagesItemDescription = styled.p`
  color: #7e7e7e;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  @media only screen and (min-width: 768px) {
    max-width: 309px;
    line-height: 24px;
  }
`;
