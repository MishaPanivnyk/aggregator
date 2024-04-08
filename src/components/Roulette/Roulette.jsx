import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'components/Container/Container';
import {
  RouletteContainer,
  RouletteList,
  RouletteSpinerContainer,
  RouletteTitlte,
  RouletteDesc,
  StyledMDBListGroupItem,
  RouletteTitleLetter,
} from './Roulette.styled';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Loader } from 'components/Loader/Loader';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';

export const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [winner, setWinner] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/universities/`
        );
        const universitiesData = response.data;
        setUniversities(universitiesData);
        setLoading(false);
        const uniqueCities = Array.from(
          new Set(universitiesData.map(university => university.location))
        );
        setCities(uniqueCities);
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };

    fetchUniversities();
  }, []);

  const handleStopSpinning = () => {
    setMustSpin(false);
    if (filteredUniversities.length > 0) {
      const winningIndex = prizeNumber % filteredUniversities.length;
      setWinner(filteredUniversities[winningIndex].universityName);
    }
  };

  const handleCloseModal = () => {
    setWinner(null);
  };

  const handleCitySelect = city => {
    setSelectedCity(city);
    setMustSpin(false);
  };

  const filteredUniversities = universities.filter(
    university => university.location === selectedCity
  );

  const getUniversityWebsite = () => {
    if (winner) {
      const winningUniversity = universities.find(
        university => university.universityName === winner
      );
      return winningUniversity ? winningUniversity.website : null;
    }
    return null;
  };

  const handleSpinClick = () => {
    if (!mustSpin && filteredUniversities.length > 0) {
      const newPrizeNumber = Math.floor(Math.random() * 30 + 10);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const generatePrizes = (universities, repeatCount) => {
    let repeatedPrizes = [];
    while (repeatedPrizes.length < 40) {
      repeatedPrizes = [
        ...repeatedPrizes,
        ...universities.map((university, index) => ({ ...university, index })),
      ];
    }
    return repeatedPrizes.slice(0, 40).map((university, index) => ({
      image: university.img,
      index: university.index, // Додано індекс об'єкта університету як приз
    }));
  };

  return (
    <RouletteContainer>
      <Container>
        <RouletteTitlte>
          <RouletteTitleLetter>Р</RouletteTitleLetter>улетка Удачі
        </RouletteTitlte>
        <RouletteDesc>
          {selectedCity && ` Обране місто: ${selectedCity}`}
        </RouletteDesc>
        <RouletteList
          style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}
        >
          <MDBDropdown>
            <MDBDropdownToggle className="btn btn-primary dropdown-toggle">
              Виберіть місто
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              {cities.map((city, index) => (
                <StyledMDBListGroupItem
                  key={index}
                  active={city === selectedCity}
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </StyledMDBListGroupItem>
              ))}
            </MDBDropdownMenu>
          </MDBDropdown>
          {selectedCity && filteredUniversities.length > 0 && (
            <RouletteSpinerContainer>
              {loading ? (
                <Loader />
              ) : (
                <RoulettePro
                  prizes={generatePrizes(filteredUniversities)}
                  prizeIndex={prizeNumber}
                  start={mustSpin}
                  onPrizeDefined={handleStopSpinning}
                  spinningTime={10}
                  options={{ withoutAnimation: true }}
                />
              )}
              <MDBBtn
                onClick={handleSpinClick}
                disabled={loading || mustSpin}
                className="me-1"
                color="success"
              >
                SPIN
              </MDBBtn>
            </RouletteSpinerContainer>
          )}
        </RouletteList>
        <MDBModal open={!!winner} toggle={handleCloseModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Рулетка університетів</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={handleCloseModal}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                Вступай до: <strong>{winner}</strong>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={handleCloseModal}>
                  Закрити
                </MDBBtn>
                <MDBBtn href={getUniversityWebsite()} target="_blank">
                  На сайт
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        <RouletteDesc>
          Спонсор ідеї команда ✌️"Талісман Анатолій"✌️
        </RouletteDesc>
      </Container>
    </RouletteContainer>
  );
};
