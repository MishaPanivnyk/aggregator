import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import {
  UniversityReviewsItem,
  UniversityReviewsComment,
  UniversityReviewsAvatar,
  UniversityReviewsUser,
  UniversityReviewsAvatarContainer,
  UniversityReviewsDate,
} from '../../components/University/University.styled';
import {
  ReviewsContainer,
  ReviewsTitle,
  UniversityInfoContainer,
  UniversitiesItemImgUsers,
} from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/Container/Container';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [loadingUniversity, setLoadingUniversity] = useState(true);

  const formatDate = isoDate => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/reviews/`
        );
        setReviews(response.data);
        setLoadingReviews(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/users/`
        );
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchReviews();
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const lastTenReviews = reviews.slice(-10).reverse();
        const universitiesData = await Promise.all(
          lastTenReviews.map(review =>
            axios.get(
              `${process.env.REACT_APP_BACKEND_URL}/universities/${review.university}`
            )
          )
        );
        setUniversities(universitiesData.map(response => response.data));
        setLoadingUniversity(false);
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };
    fetchUniversities();
  }, [reviews]);
  const UniversityInfo = ({ universityId }) => {
    const university = universities.find(u => u.id === universityId);
    if (!university) return null;

    return (
      <UniversityInfoContainer>
        <Link to={`/universities/${university.id}`}>
          <UniversitiesItemImgUsers
            src={university.img}
            alt={university.universityName}
          />
        </Link>
        <p>{university.universityName}</p>
      </UniversityInfoContainer>
    );
  };

  return (
    <main>
      <ReviewsContainer>
        <Container>
          <ReviewsTitle>Нещодавні відгуки</ReviewsTitle>
          {loadingReviews || loadingUniversity ? (
            <Loader />
          ) : (
            reviews
              .slice(-10)
              .reverse()
              .map((review, index) => {
                const user = users.find(user => user.id === review.user);
                if (!user) return null;

                return (
                  <UniversityReviewsItem key={index}>
                    <UniversityInfo universityId={review.university} />
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
                );
              })
          )}
        </Container>
      </ReviewsContainer>
    </main>
  );
};

export default Reviews;
