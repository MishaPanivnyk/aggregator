import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 21px;
  @media only screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 128px;
  }
  @media only screen and (min-width: 1024px) {
    padding-top: 70px;
    padding-bottom: 56px;
  }
`;
export const BlogTitle = styled.h2`
  color: #2b2b2b;
  text-align: center;
  font-family: 'Poppins';
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 26px;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const BlogList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  @media only screen and (min-width: 768px) {
    flex-direction: initial;
    align-items: initial;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media only screen and (min-width: 1024px) {
    gap: 22px;
    flex-wrap: wrap;
  }
`;
export const BlogItem = styled.li`
  width: 345px;
  position: relative;
  border-radius: 5px;
  border: 1px solid #f0f0f0;
  background: #fff;
  box-shadow: 0px 4px 26px 0px rgba(203, 203, 203, 0.25);
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    width: 350px;

    /* width: calc(23.333% - 20px); */
  }
`;
export const BlogItemImg = styled.img`
  width: 100%;
  height: 100%;
  /* position: relative; */
  margin-bottom: 20px;
  object-fit: cover;
`;

export const BlogItemContainerCenter = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: initial;
    align-items: initial;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1400px;
  }
`;

export const BlogItemDesc = styled.p`
  border-radius: 100px;
  background: #2b2b2b;
  color: #fff;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px;
  position: absolute;
  top: 10px;
  left: 20px;
  z-index: 99;
`;

export const BlogItemTitle = styled.h3`
  color: #2b2b2b;
  font-family: 'Poppins';
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 22px;
  margin-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
`;

export const BlogItemDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
`;
export const BlogItemDate = styled.p`
  color: #8c8c8c;
  font-family: 'Open Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const BlogItemBtn = styled(NavLink)`
  color: #b5b5b5;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px 30px;
  border-radius: 100px;
  border: 1px solid #d7d7d7;
  background: inherit;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #fff;
    background-color: #01e45c;
    border-color: #01e45c;
    outline: none;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const DeleteIcon = styled.a`
  position: absolute;
  z-index: 9999;
  right: 10px;
  top: 10px;
  fill: red;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    fill: #01e45c;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const LinkAdd = styled.a`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    fill: #01e45c;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &svg {
    width: 100%;
  }
`;
export const ContainerAddBtn = styled.div`
  display: flex;
  justify-content: center;
`;
