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
} from './Universities.styled';
import { toast } from 'react-toastify';

export const Universities = () => {
  const location = useLocation();
  const isUniversitiesPage = location.pathname === '/universities';
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) ',
  });
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
  ]);
  const [selectedDirection, setSelectedDirection] = useState('IT');
  const [universities, setUniversities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleUniversities, setVisibleUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const universitiesPerPage = 5;

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
  const handleDirectionClick = direction => {
    setSelectedDirection(direction);

    setCurrentPage(1);
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
