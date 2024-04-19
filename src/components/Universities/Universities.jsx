import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import sprite from 'img/sprite.svg';
import { useLocation } from 'react-router-dom';
import { MdCompareArrows } from 'react-icons/md';
import { Container } from 'components/Container/Container';
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from 'mdb-react-ui-kit';
import { useMediaQuery } from 'react-responsive';
import {
  UniversitiesContainer,
  UniversitiesTitle,
  DirectionItem,
  ScrollableContainer,
  DirectionList,
  UniversitiesList,
  UniversitiesItem,
  ButtonMore,
  ButtonContainer,
  UniversitiesItemImg,
  UniversitiesItemRating,
  UniversitiesItemReviews,
  UniversitiesItemLocation,
  UniversitiesItemPrice,
  UniversitiesItemBtnContainer,
  UniversitiesItemBtnLinkSite,
  UniversitiesItemBtnLinkId,
  UniversitiesItemaAddCompare,
  UniversitiesListContainer,
  UniversitiesItemFeaturesContainer,
  UniversitiesItemFeatures,
  UniversitiesItemPriceContainer,
  UniversitiesCategoryContainer,
  UniversitiesFilterBtn,
  UniversitiesCategoryItemContainer,
  FilterContainer,
  FilterButtonClose,
} from './Universities.styled';
import { toast } from 'react-toastify';
import {
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup,
  FormLabel,
} from '@mui/material';

export const Universities = () => {
  const location = useLocation();
  const isUniversitiesPage = location.pathname === '/universities';
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) ',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 1023px) ',
  });
  const isPc = useMediaQuery({
    query: '(min-width: 1024px) ',
  });
  const [selectedType, setSelectedType] = useState(null);
  const [isDistanceLearning, setIsDistanceLearning] = useState(false);
  const [cities, setCities] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // eslint-disable-next-line
  const [popularDirections, setPopularDirections] = useState([
    'IT',
    'Право',
    'Інженерія',
    'Медичний',
    'Економіка',
    'Мистецтво',
    'Філологія',
    'Сфера обслуговування',
    'Фізика',
    'Архітектура та будівництво',
    'Міжнародне право',
    // 'Управління та адміністрування',
    // 'Математика та статистика',
    // 'Хімія',
    // 'Адміністрування',
  ]);
  const [selectedDirection, setSelectedDirection] = useState('IT');
  const [universities, setUniversities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleUniversities, setVisibleUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [uniqueDirections, setUniqueDirections] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const universitiesPerPage = 5;

  useEffect(() => {
    const fetchAllUniversities = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/universities`
        );
        const data = response.data;
        // Збір унікальних напрямів
        // const allDirections = data.flatMap(university =>
        //   university.specialties.map(specialty => specialty.direction)
        // );
        // const uniqueDirections = [...new Set(allDirections)];

        let filteredUniversities = data;

        // Фільтрація за напрямом
        if (selectedDirection) {
          filteredUniversities = filteredUniversities.filter(university =>
            university.specialties.some(
              specialty => specialty.direction === selectedDirection
            )
          );
        }

        // Фільтрація за типом університету
        if (selectedType !== null) {
          filteredUniversities = filteredUniversities.filter(
            university => university.type === selectedType
          );
        }

        // Фільтрація за дистанційною освітою
        if (isDistanceLearning) {
          filteredUniversities = filteredUniversities.filter(
            university => university.remoteEducation === 'Так'
          );
        }
        if (selectedCities.length > 0) {
          filteredUniversities = filteredUniversities.filter(university =>
            selectedCities.includes(university.location)
          );
        }

        setUniversities(filteredUniversities);
        const uniqueCities = [
          ...new Set(data.map(university => university.location)),
        ];
        setCities(uniqueCities);
        // setUniqueDirections(uniqueDirections);
        setUniversities(filteredUniversities);
      } catch (error) {
        console.error('Error fetching all universities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUniversities();
  }, [selectedDirection, selectedType, selectedCities, isDistanceLearning]);

  const updateVisibleUniversities = () => {
    const sortedUniversities = universities.sort((a, b) => b.rating - a.rating);
    const indexOfLastUniversity = currentPage * universitiesPerPage;
    const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
    const currentUniversities = sortedUniversities.slice(
      indexOfFirstUniversity,
      indexOfLastUniversity
    );
    setVisibleUniversities(currentUniversities);
  };

  useEffect(() => {
    updateVisibleUniversities();
    // eslint-disable-next-line
  }, [currentPage, universities]);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const toggleFilter = () => {
    setIsFilterOpen(prevState => !prevState);
  };

  const handleDirectionClick = direction => {
    if (selectedDirection === direction) {
      setSelectedDirection(null); // Знімаємо виділення, якщо напрям вже обраний
    } else {
      setSelectedDirection(direction);
    }
    setCurrentPage(1);
  };

  const handleTypeChange = event => {
    const type = event.target.value;
    if (selectedType === type) {
      setSelectedType(null);
    } else {
      setSelectedType(type);
    }
    setCurrentPage(1);
  };

  const handleDistanceLearningChange = event => {
    setIsDistanceLearning(event.target.checked);
    setCurrentPage(1);
  };
  const handleCityChange = city => {
    if (selectedCities.includes(city)) {
      setSelectedCities(
        selectedCities.filter(selectedCity => selectedCity !== city)
      );
    } else {
      setSelectedCities([...selectedCities, city]);
    }
  };
  const addToComparison = async universityId => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/comparison/compare/`,
        {
          university_id: universityId,
        },
        {
          headers: {
            Authorization: `token ${localStorage.getItem('token')}`,
          },
        }
      );
      toast.success('Успішно додано в порівняння!');
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          toast.error('Авторизуйтесь!');
        } else if (error.response.status === 400) {
          toast.error('Досягнута максимальна кількість для порівняння');
        } else if (error.response.status === 409) {
          toast.error('Цей університет вже додано в порівняння!');
        } else {
          console.error('Error adding university to comparison:', error);
          toast.error('Щось пішло не так. Спробуйте ще раз пізніше.');
        }
      } else {
        console.error('Error adding university to comparison:', error);
        toast.error('Щось пішло не так. Спробуйте ще раз пізніше.');
      }
    }
  };

  return (
    <UniversitiesContainer>
      <Container>
        {!isUniversitiesPage && (
          <UniversitiesTitle>Популярні напрями</UniversitiesTitle>
        )}
        {isMobile && (
          <UniversitiesFilterBtn onClick={toggleFilter}>
            Фільтри
            <svg width="20px" height="20px">
              <use href={sprite + '#icon-filter'} />
            </svg>
          </UniversitiesFilterBtn>
        )}
        {isFilterOpen && (
          <FilterContainer>
            <FilterButtonClose onClick={toggleFilter}>
              <svg width="25px" height="25px">
                <use href={sprite + '#icon-cancel'} />
              </svg>
            </FilterButtonClose>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <FormLabel>Тип</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    value="Приватний"
                    checked={selectedType === 'Приватний'}
                    onChange={handleTypeChange}
                  />
                }
                label="Приватні"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Державний"
                    checked={selectedType === 'Державний'}
                    onChange={handleTypeChange}
                  />
                }
                label="Державні"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <FormLabel>Дистанційна освіта</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isDistanceLearning}
                    onChange={handleDistanceLearningChange}
                  />
                }
                label="Так"
              />
            </div>
            <FormControl>
              <FormLabel>Місто</FormLabel>
              <FormGroup>
                {cities.map((city, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={selectedCities.includes(city)}
                        onChange={() => handleCityChange(city)}
                      />
                    }
                    label={city}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </FilterContainer>
        )}
        <ScrollableContainer
          options={{
            suppressScrollX: false,
            suppressScrollY: true,
          }}
        >
          <DirectionList>
            {popularDirections.map((direction, index) => (
              <DirectionItem
                key={index}
                onClick={() => handleDirectionClick(direction)}
                style={{
                  borderRadius: '50px',
                  background:
                    direction === selectedDirection ? '#01E45C' : 'transparent',
                  color: direction === selectedDirection ? 'white' : 'black',
                }}
              >
                {direction}
              </DirectionItem>
            ))}
            {/* {isUniversitiesPage &&
              uniqueDirections.map((direction, index) => (
                <DirectionItem
                  key={index}
                  onClick={() => handleDirectionClick(direction)}
                  style={{
                    borderRadius: '50px',
                    background:
                      direction === selectedDirection
                        ? '#01E45C'
                        : 'transparent',
                    color: direction === selectedDirection ? 'white' : 'black',
                  }}
                >
                  {direction}
                </DirectionItem>
              ))} */}
          </DirectionList>
        </ScrollableContainer>

        <UniversitiesCategoryItemContainer>
          {isUniversitiesPage && isPc && (
            <UniversitiesCategoryContainer>
              <FormLabel>Тип</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    value="Приватний"
                    checked={selectedType === 'Приватний'}
                    onChange={handleTypeChange}
                  />
                }
                label="Приватні"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Державний"
                    checked={selectedType === 'Державний'}
                    onChange={handleTypeChange}
                  />
                }
                label="Державні"
              />
              <FormLabel>Дистанційна освіта</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isDistanceLearning}
                    onChange={handleDistanceLearningChange}
                  />
                }
                label="Так"
              />
              <FormControl>
                <FormLabel>Місто</FormLabel>
                <FormGroup>
                  {cities.map((city, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          checked={selectedCities.includes(city)}
                          onChange={() => handleCityChange(city)}
                        />
                      }
                      label={city}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </UniversitiesCategoryContainer>
          )}
          <UniversitiesListContainer>
            <UniversitiesList>
              {loading ? (
                <Loader />
              ) : (
                visibleUniversities.map((university, index) => (
                  <UniversitiesItem key={index}>
                    <UniversitiesItemImg
                      src={university.img}
                      alt={university.universityName}
                    />
                    <div>
                      <UniversitiesItemRating>
                        <svg width="14px" height="14px">
                          <use href={sprite + '#icon-star'} />
                        </svg>
                        {Math.round(university.rating * 10) / 10}
                      </UniversitiesItemRating>
                      <UniversitiesItemReviews>
                        Відгуки: {university.reviewCount}
                      </UniversitiesItemReviews>
                    </div>
                    <UniversitiesItemLocation>
                      <svg width="17px" height="17px">
                        <use href={sprite + '#icon-location'} />
                      </svg>
                      {university.location}
                    </UniversitiesItemLocation>
                    <UniversitiesItemPriceContainer>
                      <UniversitiesItemPrice>
                        Ціни: <br /> {university.price}
                      </UniversitiesItemPrice>
                      <UniversitiesItemFeaturesContainer>
                        <UniversitiesItemFeatures>
                          <svg width="18px" height="18px">
                            <use href={sprite + '#icon-type'} />
                          </svg>
                          {university.type}
                        </UniversitiesItemFeatures>
                        <UniversitiesItemFeatures>
                          <svg width="18px" height="18px">
                            <use href={sprite + '#icon-bakalavr'} />
                          </svg>
                          Бакалавр
                        </UniversitiesItemFeatures>
                        <UniversitiesItemFeatures>
                          <svg width="20px" height="20px">
                            <use href={sprite + '#icon-magistr'} />
                          </svg>
                          Магістр
                        </UniversitiesItemFeatures>
                        <UniversitiesItemFeatures>
                          <svg width="19px" height="19px">
                            <use href={sprite + '#icon-diplom'} />
                          </svg>
                          Диплом
                        </UniversitiesItemFeatures>
                      </UniversitiesItemFeaturesContainer>
                    </UniversitiesItemPriceContainer>

                    <UniversitiesItemBtnContainer>
                      <UniversitiesItemBtnLinkSite
                        to={university.website}
                        target="_blank"
                      >
                        На сайт
                      </UniversitiesItemBtnLinkSite>
                      <UniversitiesItemBtnLinkId
                        to={`/universities/${university.id}`}
                      >
                        Детальніше
                      </UniversitiesItemBtnLinkId>
                      <UniversitiesItemaAddCompare
                        onClick={() => addToComparison(university.id)}
                      >
                        <MdCompareArrows
                          style={{
                            marginRight: '5px',
                            cursor: 'pointer',
                            fontSize: '17px',
                          }}
                        />
                        Добавити в порівняння
                      </UniversitiesItemaAddCompare>
                    </UniversitiesItemBtnContainer>
                  </UniversitiesItem>
                ))
              )}
            </UniversitiesList>
          </UniversitiesListContainer>
        </UniversitiesCategoryItemContainer>
        {isUniversitiesPage
          ? universities.length > universitiesPerPage && (
              <MDBPagination size={isTablet ? 'lg' : 'sm'} className="mb-0">
                {Array.from(
                  {
                    length: Math.ceil(
                      universities.length / universitiesPerPage
                    ),
                  },
                  (_, i) => (
                    <MDBPaginationItem
                      key={i}
                      active={i + 1 === currentPage}
                      onClick={() => paginate(i + 1)}
                    >
                      <MDBPaginationLink href="#">{i + 1}</MDBPaginationLink>
                    </MDBPaginationItem>
                  )
                )}
              </MDBPagination>
            )
          : universities.length > visibleUniversities.length && (
              <ButtonContainer>
                <ButtonMore to="/universities">Подивитись ще</ButtonMore>
              </ButtonContainer>
            )}
      </Container>
    </UniversitiesContainer>
  );
};
