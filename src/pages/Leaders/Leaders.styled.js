import styled from 'styled-components';

export const LeaderTitle = styled.h1`
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
export const LeaderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const LeaderItem = styled.li`
  position: relative;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const LeaderImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  filter: brightness(0.5);
  @media only screen and (min-width: 768px) {
    height: 900px;
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const LeaderTextContainer = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 20px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media only screen and (min-width: 768px) {
    bottom: 40px;
    left: 100px;
    gap: 10px;
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const LeaderItemTitle = styled.h2`
  color: white;
  font-family: 'Montserrat';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media only screen and (min-width: 768px) {
    font-weight: 700;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 30px;
    font-weight: 900;
  }
`;
export const LeaderItemDesc = styled.p`
  color: white;
  font-family: 'Montserrat';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  & span {
    color: orange;
  }
  @media only screen and (min-width: 768px) {
    font-weight: 500;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 30px;
    font-weight: 600;
  }
`;
