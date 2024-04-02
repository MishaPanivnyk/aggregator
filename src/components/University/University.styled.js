import styled from 'styled-components';

export const UniversityContainer = styled.section`
  background: #f8f8f8;
  padding-top: 60px;
  padding-bottom: 35px;

  @media only screen and (min-width: 768px) {
    padding-top: 90px;
    padding-left: 50px;
    padding-right: 50px;
  }
  @media only screen and (min-width: 1024px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`;
export const UniversityTitle = styled.h1`
  color: #2b2b2b;
  text-align: center;
  font-family: 'Montserrat';
  font-size: 26px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    text-align: start;
    line-height: 44px;
    margin-bottom: 30px;
    font-size: 36px;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 50px;
  }
`;
export const UniversityContainerTitle = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
    gap: 30px;
  }
`;

export const UniversityDetails = styled.div`
  @media only screen and (min-width: 1024px) {
    flex: 1;
  }
`;

export const UniversityImgContainer = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
    gap: 50px;
    flex-direction: column;
  }
`;

export const UniversityLocation = styled.p`
  color: #8c8c8c;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 37px;
  }
`;
export const UniversityDesc = styled.p`
  color: #000;
  font-family: 'Montserrat';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 37px;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 60px;
    max-width: 850px;
    font-size: 18px;
  }
`;
export const UniversityImg = styled.img`
  width: 166px;
  height: 166px;
  object-fit: contain;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  margin-bottom: 50px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 37px;
    width: 210px;
    height: 210px;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 60px;
  }
`;
export const UniversityItemContainer = styled.div`
  margin-bottom: 30px;
  border-radius: 5px;
  border: 1px solid #f3f2f2;
  background: #fff;
  box-shadow: 0px 4px 147px 0px rgba(0, 0, 0, 0.06);
  padding: 20px 30px;
  @media only screen and (min-width: 768px) {
    padding: 50px 40px;
    width: 400px;
    height: 400px;
  }
  @media only screen and (min-width: 1024px) {
  }
`;

export const UniversityItemText = styled.p`
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  display: flex;
  margin-bottom: 20px;
  & span {
    & svg {
      margin-right: 5px;
    }
    display: flex;
    align-items: center;
    margin-left: auto;

    font-weight: 700;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversityListContainer = styled.ul`
  display: flex;
  /* gap: 25px; */
  flex-direction: column;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    flex-direction: initial;
    justify-content: center;
    gap: 35px;
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversityItemAdvatnages = styled.li`
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversityItemAdvatnagesTitle = styled.h2`
  color: #2b2b2b;
  text-align: center;
  font-family: 'Montserrat';
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversityItemAdvatnagesText = styled.p`
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 20px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversityReviewsBtnContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversityReviewsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversityReviewsItem = styled.li`
  border-radius: 5px;
  background: #f6f7ff;
  padding: 30px 20px;
  border: 2px solid #f0f0f0;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversityReviewsAvatar = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversityReviewsAvatarContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    /* margin-top: 10px; */
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversityReviewsDate = styled.p`
  color: #8c8c8c;
  font-family: 'Open Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media only screen and (min-width: 768px) {
    /* display: flex;
    margin-left: auto;
    justify-content: flex-end;
    padding-right: 50px; */
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversityReviewsUser = styled.p`
  color: #8c8c8c;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
  margin-bottom: 5px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const UniversityReviewsComment = styled.p`
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  margin-bottom: 15px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
