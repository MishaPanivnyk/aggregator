import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProfileContainer, DeleteIcon } from './Profile.styled';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBModalTitle,
  MDBModalDialog,
  MDBModalContent,
  MDBInput,
  MDBFile,
} from 'mdb-react-ui-kit';
import sprite from 'img/sprite.svg';
import Alert from '@mui/material/Alert';
import Rating from '@mui/material/Rating';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { FaPlusCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import defaultAvatar from 'img/Avatar.jpg';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { Link } from 'react-router-dom';
import { Avatar } from 'components/Header/Avatar/Avatar';
import {
  UniversityReviewsContainer,
  UniversityReviewsItem,
  UniversityReviewsComment,
  UniversityReviewsAvatarContainer,
  UniversityReviewsDate,
} from '../../components/University/University.styled';
import {
  UniversityInfoContainer,
  UniversitiesItemImgUsers,
} from '../Reviews/Reviews.styled';
const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [newAvatar, setNewAvatar] = useState(null);
  const [basicModal, setBasicModal] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [userReviews, setUserReviews] = useState([]);
  const [initialProfileData, setInitialProfileData] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [universities, setUniversities] = useState([]);
  const [loadingUniversity, setLoadingUniversity] = useState(true);

  // eslint-disable-next-line
  const [avatarUrl, setAvatarUrl] = useState('');

  const token = localStorage.getItem('token');

  const formatDate = isoDate => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      if (token) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/profile/`,
            {
              headers: {
                Authorization: `token ${token}`,
              },
            }
          );

          setProfileData(response.data);
          setInitialProfileData(response.data);
          setAvatarUrl(response.data.imageUrl);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      }
    };

    fetchProfileData();
  }, [token]);

  useEffect(() => {
    const fetchUserReviews = async () => {
      if (profileData && profileData.id) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/profile/${profileData.id}/reviews/`,
            {
              headers: {
                Authorization: `token ${token}`,
              },
            }
          );
          setUserReviews(response.data);
        } catch (error) {
          console.error('Error fetching user reviews:', error);
        }
      }
    };

    fetchUserReviews();
    // eslint-disable-next-line
  }, [profileData]);

  const handleFileChange = event => {
    setNewAvatar(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (newAvatar) {
      const formData = new FormData();
      formData.append('imageUrl', newAvatar);

      try {
        const response = await axios.patch(
          `${process.env.REACT_APP_BACKEND_URL}/api/profile/edit/`,
          formData,
          {
            headers: {
              Authorization: `token ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        toast.success('Аватар успішно оновлено!');
        setProfileData(prevState => ({
          ...prevState,
          imageUrl: response.data.imageUrl,
        }));
        setBasicModal(false);
        setNewAvatar(null);
        setAvatarUrl(response.data.imageUrl);

        // Оновлення URL аватарки
      } catch (error) {
        toast.error('Виникла проблема з оновленням аватара!');
      }
    }
  };
  const handleInputChange = event => {
    const { name, value } = event.target;

    // Перевіряємо, чи змінилося значення поля перед оновленням editedFields
    if (editedFields[name] !== value) {
      setEditedFields(prevState => ({
        ...prevState,
        [name]: value,
      }));
      setIsModified(true);
    }
  };

  const handleEditSubmit = async () => {
    try {
      const updatedFields = {};

      Object.keys(editedFields).forEach(key => {
        if (editedFields[key] !== initialProfileData[key]) {
          updatedFields[key] = editedFields[key];
        }
      });

      if (Object.keys(updatedFields).length === 0) {
        return;
      }

      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/profile/edit/`,
        updatedFields,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      toast.success('Профіль успішно оновлено!');
      console.log(response.data);
      setProfileData(response.data);
      setIsModified(false);
      setInitialProfileData(response.data);
    } catch (error) {
      toast.error('Виникла проблема з оновленням профілю!');
    }
  };

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const universitiesData = await Promise.all(
          userReviews.map(review =>
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
  }, [userReviews]);

  const handleDeleteReview = async reviewId => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/review/${reviewId}/delete`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      setUserReviews(prevReviews =>
        prevReviews.filter(review => review.id !== reviewId)
      );

      toast.success('Відгук успішно видалено!');
    } catch (error) {
      toast.error('Виникла проблема з видаленням відгуку!');
    }
  };

  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <main>
      {token ? (
        <ProfileContainer>
          {profileData && (
            <MDBContainer className="py-5">
              <MDBRow>
                <MDBCol lg="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                      <div className="position-relative">
                        {profileData.imageUrl ? (
                          <Avatar
                            key={profileData.imageUrl}
                            src={profileData.imageUrl}
                            alt="avatar"
                            className="rounded-circle"
                            width="150px"
                            height="150px"
                            fluid
                          />
                        ) : (
                          <Avatar
                            key={defaultAvatar}
                            src={defaultAvatar}
                            alt="default avatar"
                            className="rounded-circle"
                            width="150px"
                            height="150px"
                            fluid
                          />
                        )}
                        <FaPlusCircle
                          onClick={toggleOpen}
                          className="btn-icon"
                        />
                      </div>
                      <MDBModal open={basicModal} setOpen={setBasicModal}>
                        <MDBModalDialog>
                          <MDBModalContent>
                            <MDBModalHeader>
                              <MDBModalTitle>
                                Завантаження аватара
                              </MDBModalTitle>
                            </MDBModalHeader>
                            <MDBModalBody>
                              <MDBFile
                                type="file"
                                id="formFileMultiple"
                                onChange={handleFileChange}
                                accept="image/*"
                                multiple
                              />
                              {newAvatar && (
                                <img
                                  src={URL.createObjectURL(newAvatar)}
                                  alt="preview"
                                  style={{
                                    width: '200px',
                                    marginTop: '10px',
                                  }}
                                />
                              )}
                            </MDBModalBody>
                            <MDBModalFooter>
                              <MDBBtn color="secondary" onClick={toggleOpen}>
                                Закрити
                              </MDBBtn>
                              <MDBBtn color="primary" onClick={handleSubmit}>
                                Зберегти
                              </MDBBtn>
                            </MDBModalFooter>
                          </MDBModalContent>
                        </MDBModalDialog>
                      </MDBModal>
                      <p className="text-muted mb-1">
                        {profileData.isCreator ? 'Creator' : 'User'}
                      </p>
                      <p className="text-muted mb-4">
                        {profileData.first_name} {profileData.last_name}
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="8">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>First Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBInput
                            type="text"
                            name="first_name"
                            value={
                              editedFields.first_name || profileData.first_name
                            }
                            onChange={handleInputChange}
                            placeholder="Enter your first name"
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText
                            style={{
                              marginTop: '20px',
                            }}
                          >
                            Last Name
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol
                          sm="9"
                          style={{
                            marginTop: '20px',
                          }}
                        >
                          <MDBInput
                            type="text"
                            name="last_name"
                            value={
                              editedFields.last_name || profileData.last_name
                            }
                            onChange={handleInputChange}
                            placeholder="Enter your last name"
                          />
                        </MDBCol>
                      </MDBRow>

                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Username</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBInput
                            id="typeName"
                            type="text"
                            name="username"
                            value={
                              editedFields.username || profileData.username
                            }
                            onChange={handleInputChange}
                          />
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Email</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBInput
                            id="typeEmail"
                            type="email"
                            name="email"
                            value={editedFields.email || profileData.email}
                            onChange={handleInputChange}
                          />
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Creator</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          {profileData.isCreator ? (
                            <MDBCardText className="text-muted text-muted2">
                              Yes
                            </MDBCardText>
                          ) : (
                            <Alert
                              variant="outlined"
                              severity="info"
                              style={{ width: '100%' }}
                            >
                              Для отримання прав написання блогів, зверніться{' '}
                              <a href="https://t.me/diwwmix">сюди</a>
                            </Alert>
                          )}
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBBtn
                        color="primary"
                        onClick={handleEditSubmit}
                        disabled={!isModified}
                      >
                        Зберегти зміни
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBCard className="mb-4 mb-md-0">
                        <MDBCardBody>
                          <MDBCardText
                            className="mb-4"
                            style={{ fontFamily: 'Roboto' }}
                          >
                            <span className="text-primary font-italic me-1">
                              Відгуки
                            </span>{' '}
                            Користувача
                          </MDBCardText>
                          <hr />
                          <div>
                            {userReviews
                              .slice()
                              .reverse()
                              .map((review, index) => (
                                <UniversityReviewsContainer key={review.id}>
                                  <UniversityReviewsItem
                                    style={{ position: 'relative' }}
                                  >
                                    {loadingUniversity ? (
                                      <div>Loading university info...</div>
                                    ) : (
                                      <div>
                                        {universities[index] && (
                                          <UniversityInfoContainer className="university-info-container">
                                            <Link
                                              to={`/universities/${universities[index].id}`}
                                            >
                                              <UniversitiesItemImgUsers
                                                src={universities[index].img}
                                                alt={
                                                  universities[index]
                                                    .universityName
                                                }
                                              />
                                            </Link>
                                            <p>
                                              {
                                                universities[index]
                                                  .universityName
                                              }
                                            </p>
                                          </UniversityInfoContainer>
                                        )}
                                      </div>
                                    )}
                                    <UniversityReviewsAvatarContainer>
                                      <Rating
                                        name={`rating-${review.id}`}
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
                                    <DeleteIcon
                                      onClick={() =>
                                        handleDeleteReview(review.id)
                                      }
                                    >
                                      <svg width="30px" height="30px">
                                        <use href={sprite + '#icon-close'} />
                                      </svg>
                                    </DeleteIcon>
                                  </UniversityReviewsItem>
                                </UniversityReviewsContainer>
                              ))}
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          )}
        </ProfileContainer>
      ) : (
        <ErrorPage />
      )}
    </main>
  );
};

export default Profile;
