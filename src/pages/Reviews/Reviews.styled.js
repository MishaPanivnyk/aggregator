import styled from 'styled-components';
import { UniversitiesItemImg } from 'components/Universities/Universities.styled';

export const ReviewsContainer = styled.section`
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
`;
export const UniversitiesItemImgUsers = styled(UniversitiesItemImg)`
  width: 100px;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    /* width: 40%; */
  }
`;
export const ReviewsTitle = styled.h1`
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
export const UniversityInfoContainer = styled.div`
  color: #2b2b2b;
  text-align: center;
  font-family: 'Montserrat';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 44px;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 1024px) {
  }
`;
