import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'components/Container/Container';
import {
  RouletteContainer,
  RouletteList,
  RouletteSpinerContainer,
  RouletteTitlte,
  RouletteDesc,
  StyledMDBListGroupItem,
  WheelItem,
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
    if (
      !isNaN(prizeNumber) &&
      filteredUniversities.length > 0 &&
      prizeNumber >= 0 &&
      prizeNumber < filteredUniversities.length
    ) {
      setWinner(filteredUniversities[prizeNumber].universityName);
    }
  };
  const handleCloseModal = () => {
    setWinner(null);
  };

  const handleCitySelect = city => {
    setSelectedCity(city);
  };

  const generateRandomColor = () => {
    const colors = [
      '#FF5733',
      '#33FF57',
      '#5733FF',
      '#33FFA8',
      '#FFA833',
      '#A833FF',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const filteredUniversities = universities.filter(
    university => university.location === selectedCity
  );

  const data = filteredUniversities.map((university, index) => ({
    option: index.toString(),
    style: { backgroundColor: generateRandomColor(), textColor: 'black' },
    name: university.universityName,
  }));
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
    if (!mustSpin && data.length > 0) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      console.log(prizeNumber);
    }
  };
  console.log(data);
  return (
    <RouletteContainer>
      <Container>
        <RouletteTitlte>Рулетка Удачі</RouletteTitlte>
        <RouletteList>
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
                <RouletteSpinerContainer>
                  <WheelItem
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    onStopSpinning={handleStopSpinning}
                  />
                </RouletteSpinerContainer>
              )}
              <MDBBtn
                onClick={handleSpinClick}
                disabled={loading}
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
