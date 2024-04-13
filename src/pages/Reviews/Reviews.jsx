import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from 'mdb-react-ui-kit';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import sprite from 'img/sprite.svg';
import {
  UniversityReviewsItem,
  UniversityReviewsComment,
  UniversityReviewsAvatar,
  UniversityReviewsUser,
  UniversityReviewsAvatarContainer,
  UniversityReviewsDate,
} from '../../components/University/University.styled';
import { DeleteIcon } from 'pages/Profile/Profile.styled';
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
  const [isModerator, setIsModerator] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10; 

  const formatDate = isoDate => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const token = localStorage.getItem('token');

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

    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/profile`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        setIsModerator(response.data.isModerator);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchReviews();
    fetchUsers();
    fetchProfile();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const universitiesData = await Promise.all(
          reviews.map(review =>
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

  const deleteReview = async reviewId => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/review/${reviewId}/delete`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      setReviews(reviews.filter(review => review.id !== reviewId));
      toast.success('Відгук успішно видалено!');
    } catch (error) {
      toast.error('Виникла помилка при видаленні!');
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortedReviews = [...reviews].reverse(); 

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = sortedReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);

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
            <>
              {currentReviews.map((review, index) => {
                const user = users.find(user => user.id === review.user);
                if (!user) return null;

                return (
                  <UniversityReviewsItem
                    key={index}
                    style={{ position: 'relative' }}
                  >
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
                    {isModerator && (
                      <DeleteIcon onClick={() => deleteReview(review.id)}>
                        <svg width="30px" height="30px">
                          <use href={sprite + '#icon-close'} />
                        </svg>
                      </DeleteIcon>
                    )}
                  </UniversityReviewsItem>
                );
              })}
              <MDBPagination className="mb-0" size="lg">
                {Array.from({ length: totalPages }, (_, index) => (
                  <MDBPaginationItem
                    key={index}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    <MDBPaginationLink href="#">
                      {index + 1}
                    </MDBPaginationLink>
                  </MDBPaginationItem>
                ))}
              </MDBPagination>
            </>
          )}
        </Container>
      </ReviewsContainer>
    </main>
  );
};

export default Reviews;
