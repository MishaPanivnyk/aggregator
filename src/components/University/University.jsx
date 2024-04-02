import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import sprite from 'img/sprite.svg';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Alert from '@mui/material/Alert';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/Container/Container';
import {
  UniversityContainer,
  UniversityDesc,
  UniversityImg,
  UniversityItemAdvatnages,
  UniversityItemAdvatnagesText,
  UniversityItemAdvatnagesTitle,
  UniversityItemContainer,
  UniversityItemText,
  UniversityListContainer,
  UniversityLocation,
  UniversityTitle,
  UniversityReviewsContainer,
  UniversityReviewsItem,
  UniversityReviewsBtnContainer,
  UniversityReviewsAvatar,
  UniversityContainerTitle,
  UniversityDetails,
  UniversityImgContainer,
  UniversityReviewsUser,
  UniversityReviewsComment,
  UniversityReviewsAvatarContainer,
  UniversityReviewsDate,
} from './University.styled';
import { Loader } from 'components/Loader/Loader';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { UniversitiesItemBtnLinkSite } from 'components/Universities/Universities.styled';
import { Avatar } from 'components/Header/Avatar/Avatar';

export const UniversityId = () => {
  const { id } = useParams();
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem('token');

  const formatDate = isoDate => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/universities/${id}`
        );
        setUniversity(response.data);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Error fetching university: ', error);
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/universities/${id}/reviews`
        );
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews: ', error);
      }
    };

    fetchUniversity();
    fetchReviews();
  }, [id]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/users`
        );
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchUsers();
  }, []);

  const handleReviewChange = event => {
    setReview(event.target.value);
  };

  const handleRatingChange = event => {
    setRating(event.target.value);
  };

  const submitReview = async () => {
    if (!token) {
      // Якщо користувач неавторизований, відобразити повідомлення про необхідність авторизації
      toast.error('Для написання відгуку потрібно увійти в систему.');
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/create-review/`,
        {
          university: id,
          comment: review,
          rating: rating,
        },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/universities/${id}/reviews`
      );
      toast.success('Відгук успішно створено!');
      setReviews(response.data);
      setReview('');
      setRating(0);
    } catch (error) {
      toast.error('Виникла помилка при надсиланні відгуку!');
      console.error('Error submitting review: ', error);
    }
  };
  if (loading) {
    return <Loader />;
  }

  if (!university) {
    return <ErrorPage />;
  }
  return (
    <UniversityContainer>
      <Container>
        <UniversityContainerTitle>
          <UniversityDetails>
            <div>
              <UniversityTitle>{university.universityName}</UniversityTitle>
              <UniversityLocation>
                Локація | м. {university.location}
              </UniversityLocation>
            </div>
            <UniversityDesc>{university.desc}</UniversityDesc>
          </UniversityDetails>
          <UniversityImgContainer>
            <UniversityImg
              src={university.img}
              alt={university.universityName}
            />
            <UniversityItemContainer>
              <UniversityItemText>
                Рейтинг
                <span>
                  <svg width="14px" height="14px">
                    <use href={sprite + '#icon-star'} />
                  </svg>
                  {university.rating}
                </span>
              </UniversityItemText>
              <UniversityItemText>
                Тип
                <span>{university.type}</span>
              </UniversityItemText>
              <UniversityItemText>
                Акредитація
                <span>
                  {university.accreditationLevel.split(' ')[0]} рівень
                </span>
              </UniversityItemText>
              <UniversityItemText>
                Дистанційна освіта
                <span>{university.remoteEducation}</span>
              </UniversityItemText>
              <UniversityItemText>
                Ступінь
                <span>{university.specialties[0].degree}</span>
              </UniversityItemText>
              <UniversityItemText>
                Email
                <span>
                  <a href={`mailto:${university.contactInfo.email}`}>
                    {university.contactInfo.email}
                  </a>
                </span>
              </UniversityItemText>
              <UniversityItemText>
                Моб. Номер
                <span>
                  <a href={`tel:${university.contactInfo.phone}`}>
                    {university.contactInfo.phone}
                  </a>
                </span>
              </UniversityItemText>
              <UniversitiesItemBtnLinkSite
                to={university.website}
                target="_blank"
                style={{ width: '100%', marginTop: '20px' }}
              >
                На сайт
              </UniversitiesItemBtnLinkSite>
            </UniversityItemContainer>
          </UniversityImgContainer>
        </UniversityContainerTitle>
        <UniversityItemAdvatnagesTitle>Переваги</UniversityItemAdvatnagesTitle>
        <UniversityListContainer>
          {university.features
            .split(',')
            .reduce((acc, feature, index) => {
              if (index % 2 === 0) {
                acc.push([feature.trim()]);
              } else {
                acc[acc.length - 1].push(feature.trim());
              }
              return acc;
            }, [])
            .map((pair, index) => (
              <div key={index} className="flex">
                {pair.map((feature, i) => (
                  <UniversityItemAdvatnages key={i}>
                    <UniversityItemAdvatnagesText>
                      <svg width="20px" height="15px">
                        <use href={sprite + '#icon-done'} />
                      </svg>
                      {feature}
                    </UniversityItemAdvatnagesText>
                  </UniversityItemAdvatnages>
                ))}
              </div>
            ))}
        </UniversityListContainer>
        <UniversityItemAdvatnagesTitle>
          Спеціальності
        </UniversityItemAdvatnagesTitle>
        <Paper
          sx={{
            width: '100%',
            overflow: 'hidden',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Назва</TableCell>
                  <TableCell>Ступінь</TableCell>
                  <TableCell>Напрям</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {university.specialties.map((specialty, index) => (
                  <TableRow key={index}>
                    <TableCell>{specialty.name}</TableCell>
                    <TableCell>{specialty.degree}</TableCell>
                    <TableCell>{specialty.direction}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <UniversityItemAdvatnagesTitle style={{ marginTop: '40px' }}>
          Відгуки
        </UniversityItemAdvatnagesTitle>
        {token ? (
          <div>
            <TextField
              id="review"
              label="Напишіть відгук"
              multiline
              rows={4}
              value={review}
              onChange={handleReviewChange}
              sx={{
                width: '100%',
                borderRadius: '5px',
                background: '#f6f7ff',
                marginBottom: '10px',
              }}
            />
            <UniversityReviewsBtnContainer>
              <Avatar width="40px" height="40px" />
              <Rating
                name="rating"
                value={rating}
                onChange={handleRatingChange}
              />
              <Button variant="contained" onClick={submitReview}>
                Відправити
              </Button>
            </UniversityReviewsBtnContainer>
          </div>
        ) : (
          <Alert
            variant="filled"
            severity="warning"
            sx={{
              marginBottom: '40px',
            }}
          >
            Для написання відгуку, потрібно авторизуватись!
          </Alert>
        )}

        {reviews
          .slice(0)
          .reverse()
          .map((review, index) => {
            const user = users.find(user => user.id === review.user);
            if (!user) return null;

            return (
              <UniversityReviewsContainer key={index}>
                <UniversityReviewsItem>
                  <UniversityReviewsAvatarContainer>
                    <UniversityReviewsAvatar
                      src={`https://res.cloudinary.com/dvtiwucbq/${user.imageUrl}`}
                      alt={user.username}
                    />
                    <UniversityReviewsUser>{`Користувач: ${user.username}`}</UniversityReviewsUser>
                  </UniversityReviewsAvatarContainer>
                  <UniversityReviewsAvatarContainer>
                    <Rating
                      name={`rating-${index}`}
                      value={review.rating}
                      readOnly
                    />
                    <UniversityReviewsDate>
                      {formatDate(review.created_at)}
                    </UniversityReviewsDate>
                  </UniversityReviewsAvatarContainer>
                  <UniversityReviewsComment>
                    {review.comment}
                  </UniversityReviewsComment>
                </UniversityReviewsItem>
              </UniversityReviewsContainer>
            );
          })}
      </Container>
    </UniversityContainer>
  );
};
