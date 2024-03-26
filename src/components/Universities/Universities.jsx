import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import sprite from 'img/sprite.svg';
import { useLocation } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from 'mdb-react-ui-kit';

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
} from './Universities.styled';

export const Universities = () => {
  const location = useLocation();
  const isUniversitiesPage = location.pathname === '/universities';
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
  ]);
  const [selectedDirection, setSelectedDirection] = useState('IT');
  const [universities, setUniversities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleUniversities, setVisibleUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const universitiesPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/universities/`
        );
        const data = response.data;
        setUniversities(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchAllUniversities = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/universities`
        );
        const data = response.data;
        const universitiesWithoutDirection = data;
        const universitiesByDirection = universitiesWithoutDirection.filter(
          university =>
            university.specialties.some(
              specialty => specialty.direction === selectedDirection
            )
        );
        setUniversities(universitiesByDirection);
      } catch (error) {
        console.error('Error fetching all universities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUniversities();
  }, [selectedDirection]);

  useEffect(() => {
    if (universities.length > universitiesPerPage) {
      const sortedByRating = universities.sort((a, b) => b.rating - a.rating);
      setVisibleUniversities(sortedByRating.slice(0, universitiesPerPage));
    } else {
      setVisibleUniversities(universities);
    }
  }, [universities]);

  const updateVisibleUniversities = () => {
    const indexOfLastUniversity = currentPage * universitiesPerPage;
    const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
    const currentUniversities = universities.slice(
      indexOfFirstUniversity,
      indexOfLastUniversity
    );
    setVisibleUniversities(currentUniversities);
  };

  useEffect(() => {
    updateVisibleUniversities();
  }, [currentPage, universities]);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const handleDirectionClick = direction => {
    // Встановлюємо вибраний напрям
    setSelectedDirection(direction);
    // Оновлюємо поточну сторінку пагінації на 1
    setCurrentPage(1);
  };

  return (
    <UniversitiesContainer>
      <Container>
        {!isUniversitiesPage && (
          <UniversitiesTitle>Популярні напрями</UniversitiesTitle>
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
          </DirectionList>
        </ScrollableContainer>
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
                      {university.rating}
                    </UniversitiesItemRating>
                    <UniversitiesItemReviews>
                      Відгуки: {university.reviews.length}
                    </UniversitiesItemReviews>
                  </div>
                  <UniversitiesItemLocation>
                    <svg width="17px" height="17px">
                      <use href={sprite + '#icon-location'} />
                    </svg>
                    {university.location}
                  </UniversitiesItemLocation>
                  <UniversitiesItemPrice>
                    Ціна: <br /> {university.price}
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
                  <UniversitiesItemBtnContainer>
                    <UniversitiesItemBtnLinkSite
                      to={university.website}
                      target="_blank"
                    >
                      На сайт
                    </UniversitiesItemBtnLinkSite>
                    <UniversitiesItemBtnLinkId>
                      Детальніше
                    </UniversitiesItemBtnLinkId>
                    <UniversitiesItemaAddCompare>
                      <svg width="12px" height="12px">
                        <use href={sprite + '#icon-compare'} />
                      </svg>
                      Добавити в порівняння
                    </UniversitiesItemaAddCompare>
                  </UniversitiesItemBtnContainer>
                </UniversitiesItem>
              ))
            )}
          </UniversitiesList>
        </UniversitiesListContainer>
        {isUniversitiesPage
          ? universities.length > universitiesPerPage && (
              <MDBPagination size="lg" className="mb-0">
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
