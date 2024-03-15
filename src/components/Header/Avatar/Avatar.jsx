import React, { useState } from 'react';
import { Button, AvatarContainer } from './Avatar.styled';
import { ModalAuth } from '../ModalAuth/ModalAuth';
import { LogoutDropdown } from '../LogoutDropdown/LogoutDropdown';

export const Avatar = ({ onClick }) => {
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem('token');

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
        <img
          src="https://www.wpthemedetector.com/ad/uploads/Gravatar-Logo.jpg"
          alt="avatar"
        />
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
