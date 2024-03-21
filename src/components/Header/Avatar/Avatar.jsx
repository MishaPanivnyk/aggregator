import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, AvatarContainer } from './Avatar.styled';
import { ModalAuth } from '../ModalAuth/ModalAuth';
import { LogoutDropdown } from '../LogoutDropdown/LogoutDropdown';
import defaultAvatar from 'img/Avatar.jpg';

export const Avatar = ({ onClick }) => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line
  const [profileData, setProfileData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

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
          if (response.data.imageUrl) {
            setImageUrl(response.data.imageUrl);
          } else {
            setImageUrl(defaultAvatar);
          }
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      } else {
        setImageUrl(defaultAvatar);
      }
    };

    fetchProfileData();
  }, [token]);

  const handleClick = () => {
    setShowModal(!showModal);
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  const handleLogout = () => {
    setShowModal(false);
  };

  return (
    <AvatarContainer>
      <Button type="button" onClick={handleClick}>
        <img src={imageUrl} alt="avatar" />
      </Button>
      {showModal &&
        (token ? (
          <LogoutDropdown onLogout={handleLogout} />
        ) : (
          <ModalAuth isOpen={true} onClose={handleClick} />
        ))}
    </AvatarContainer>
  );
};
