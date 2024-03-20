import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProfileContainer, Avatar, Nickname, Email } from './Profile.styled';
import { Container } from 'components/Container/Container';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('https://aggregator-django.onrender.com/api/profile/', {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then(response => setProfileData(response.data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  return (
    <main>
      <Container>
        <ProfileContainer>
          {profileData && (
            <>
              <Avatar src={profileData.avatar} alt="Profile Avatar" />
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
