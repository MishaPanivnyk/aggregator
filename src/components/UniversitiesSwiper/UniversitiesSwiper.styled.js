import styled from 'styled-components';

export const UniversitiesContainer = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  .swiper-pagination-bullet {
    background-color: #01e45c !important;
  }
  @media only screen and (min-width: 768px) {
    padding-top: 35px;
  }
  @media only screen and (min-width: 1024px) {
    padding-top: 43px;
    padding-bottom: 62px;
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
  margin-bottom: 36px;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 24px;
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const NextButton = styled.button`
  color: #fff !important;
  width: 40px !important;
  height: 40px !important;
  background-color: #01e45c;
  font-size: 24px !important;
  border-radius: 50%;
  border: none;
  &::after {
    font-size: 24px !important;
  }
  @media only screen and (min-width: 1024px) {
    width: 60px !important;
    height: 60px !important;
  }
`;
export const PrevButton = styled.button`
  color: #fff !important;
  width: 40px !important;
  height: 40px !important;
  font-size: 24px !important;
  background-color: #01e45c;
  border: none;
  border-radius: 50%;
  &::after {
    font-size: 24px !important;
  }
  @media only screen and (min-width: 1024px) {
    width: 60px !important;
    height: 60px !important;
  }
`;
export const ImgContainer = styled.div`
  border-radius: 5px;
  padding: 40px;

  height: 350px;
  background: #fff;
  box-shadow: 0px 4px 26px 0px rgba(203, 203, 203, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
  @media only screen and (min-width: 1024px) {
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
export const SwiperContainer = styled.div`
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;
export const CenteredSwiper = styled.div`
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
    max-width: 1400px;
  }
`;
