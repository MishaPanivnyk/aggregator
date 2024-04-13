import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import { MdCompareArrows } from 'react-icons/md';
import { Container } from 'components/Container/Container';
import {
  SearchContainer,
  SearchInput,
  SearchIcon,
  UniversitiesItemName,
  ErrorMessage,
} from './Search.styled';
import { ErrorIcon } from 'components/Error/Error.styled';
import sprite from 'img/sprite.svg';
import {
  UniversitiesContainer,
  UniversitiesTitle,
  UniversitiesList,
  UniversitiesItem,
  UniversitiesItemImg,
  UniversitiesItemRating,
  UniversitiesItemLocation,
  UniversitiesItemBtnContainer,
  UniversitiesItemBtnLinkSite,
  UniversitiesItemBtnLinkId,
  UniversitiesItemaAddCompare,
  UniversitiesItemFeaturesContainer,
  UniversitiesItemFeatures,
  UniversitiesListContainer,
  UniversitiesItemReviews,
} from 'components/Universities/Universities.styled';

const Search = () => {
  // eslint-disable-next-line
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/universities/search/?query=${searchQuery}`
        );
        const data = response.data;

        data.sort((a, b) => b.rating - a.rating);
        setUniversities(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <UniversitiesContainer>
      <Container>
        <UniversitiesTitle>Пошук</UniversitiesTitle>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            className="form-control"
            type="text"
            placeholder="Пошук"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </SearchContainer>
        <UniversitiesListContainer>
          <UniversitiesList>
            {loading ? (
              <Loader />
            ) : universities.length === 0 ? (
              <ErrorMessage>
                <ErrorIcon>
                  <use href={sprite + '#icon-Error'} />
                </ErrorIcon>
                <p>Нічого не знайдено!</p>
              </ErrorMessage>
            ) : (
              universities.map((university, index) => (
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
                  <UniversitiesItemName>
                    {university.universityName}
                  </UniversitiesItemName>
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
                    <UniversitiesItemBtnLinkId
                      to={`/universities/${university.id}`}
                    >
                      Детальніше
                    </UniversitiesItemBtnLinkId>
                    <UniversitiesItemaAddCompare>
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
      </Container>
    </UniversitiesContainer>
  );
};

export default Search;
