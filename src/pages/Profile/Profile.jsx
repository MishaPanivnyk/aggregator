import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProfileContainer, Avatar, Nickname, Email } from './Profile.styled';
import { Container } from 'components/Container/Container';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProfileData = async () => {
      if (token) {
        try {
          console.log('Token being sent:', token);
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/profile/`,
            {
              headers: {
                Authorization: `token ${token}`,
              },
            }
          );

          setProfileData(response.data);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      }
    };

    fetchProfileData();
  }, []);

  return (
    <main>
      <Container>
        <ProfileContainer>
          {profileData && (
            <>
              <Avatar src={profileData.imageUrl} alt="Profile Avatar" />
              <Nickname>{profileData.username}</Nickname>
              <Email>{profileData.email}</Email>
            </>
          )}
        </ProfileContainer>
      </Container>
    </main>
  );
};

export default Profile;
