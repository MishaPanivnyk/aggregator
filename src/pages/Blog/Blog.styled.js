import styled from 'styled-components';

export const BlogSection = styled.section`
  padding-top: 36px;
  padding-bottom: 36px;

  @media only screen and (min-width: 768px) {
    padding-top: 56px;
    padding-bottom: 50px;
  }
  @media only screen and (min-width: 1024px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
export const BlogTitle = styled.h1`
  text-align: center;
  font-weight: 900;
  font-size: 24px;
  margin-bottom: 15px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const BlogContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    & p {
      font-size: 22px;
    }
  }
`;
export const BlogImg = styled.img`
  width: 100%;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    display: flex;
    width: 600px;
    margin-right: auto;
    margin-left: auto;
  }
  @media only screen and (min-width: 1024px) {
    width: 700px;
    margin-right: auto;
    margin-left: auto;
  }
`;
export const BlogAuthor = styled.p`
  font-family: 'Open Sans';

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const BlogAuthorContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const BlogImgContainer = styled.div`
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
