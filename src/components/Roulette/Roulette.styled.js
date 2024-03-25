import styled from 'styled-components';
import { MDBDropdownItem } from 'mdb-react-ui-kit';
import { Wheel } from 'react-custom-roulette';
export const StyledMDBListGroupItem = styled(MDBDropdownItem)`
  cursor: pointer;
  padding: 5px;
`;
export const WheelItem = styled(Wheel)`
  max-width: 510px !important;
  max-height: 510px;
`;
export const RouletteContainer = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;

  .me-1 {
    padding: 10px;
    width: 100%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto !important;
  }
  @media only screen and (min-width: 768px) {
    padding-top: 35px;
  }
  @media only screen and (min-width: 1024px) {
    padding-top: 43px;
    padding-bottom: 62px;
  }
`;

export const RouletteSpinerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const RouletteTitlte = styled.h1`
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
export const RouletteDesc = styled.p`
  margin-top: 20px;
  color: #2b2b2b;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 12px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 0px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 18px;
    line-height: 30px;
  }
`;
export const RouletteList = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: initial;
    gap: 50px;
  }
  @media only screen and (min-width: 1024px) {
  }
`;
