import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProfileContainer } from './Profile.styled';
// import { Container } from 'components/Container/Container';
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
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { FaPlusCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import defaultAvatar from 'img/Avatar.jpg';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [newAvatar, setNewAvatar] = useState(null);
  const [basicModal, setBasicModal] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [initialProfileData, setInitialProfileData] = useState(null);
  const [editedFields, setEditedFields] = useState({
    username: '',
    email: '',
  });

  const token = localStorage.getItem('token');

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
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      }
    };

    fetchProfileData();
  }, [token]);

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
        setProfileData(response.data);
        setBasicModal(false);

        const updatedProfileData = {
          ...profileData,
          imageUrl: response.data.imageUrl,
        };
        setProfileData(updatedProfileData);
        setNewAvatar(null);
      } catch (error) {
        toast.error('Виникла проблема з оновленням аватара!');
      }
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEditedFields(prevState => ({
      ...prevState,
      [name]: value,
    }));
    setIsModified(true);
  };

  const handleEditSubmit = async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/profile/edit/`,
        editedFields,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      toast.success('Профіль успішно оновлено!');
      setProfileData(response.data);
      if (
        editedFields.username !== initialProfileData.username ||
        editedFields.email !== initialProfileData.email
      ) {
        setIsModified(true);
      } else {
        setIsModified(false);
      }
    } catch (error) {
      toast.error('Виникла проблема з оновленням профілю!');
    }
  };

  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <main>
      {token ? (
        <ProfileContainer>
          {/* <Container> */}
          {profileData && (
            <MDBContainer className="py-5">
              <MDBRow>
                <MDBCol lg="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                      <div className="position-relative">
                        {profileData.imageUrl ? (
                          <img
                            src={profileData.imageUrl}
                            alt="avatar"
                            className="rounded-circle"
                            style={{ width: '150px' }}
                            fluid
                          />
                        ) : (
                          <img
                            src={defaultAvatar}
                            alt="default avatar"
                            className="rounded-circle"
                            style={{ width: '150px' }}
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
                      <p className="text-muted mb-4">Misha Panivnyk</p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="8">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Full Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            Misha Panivnyk
                          </MDBCardText>
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
                          <MDBCardText className="text-muted">
                            {profileData.isCreator ? 'Yes' : 'No'}
                          </MDBCardText>
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
                    <MDBCol md="6">
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
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          )}
          {/* </Container> */}
        </ProfileContainer>
      ) : (
        <ErrorPage />
      )}
    </main>
  );
};

export default Profile;
