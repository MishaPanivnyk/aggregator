import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  ModalBtnLogaut,
  ModalLogoutContainer,
  ModalConfirmContainer,
  ConfirmButton,
  ModalBackdrop,
  ModalConfirmTitle,
  CancelButton,
  ButtonContainer,
} from './LogoutDropdown.styled';

export const LogoutDropdown = ({ onLogout }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/logout/`,
        {},
        {
          headers: {
            Authorization: `token ${localStorage.getItem('token')}`,
          },
        }
      );
      toast.success('Ви успішно вийшли!');
      console.log('Logout successful:', response.data);
      localStorage.removeItem('token');
      onLogout();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error('Невірний токен або авторизація!');
      }
    }
    setIsConfirmOpen(false);
  };

  const toggleConfirm = () => {
    setIsConfirmOpen(prevState => !prevState);
  };

  const handleContainerClick = e => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isConfirmOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isConfirmOpen]);

  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsClosing(false);
    }
  };

  return (
    <ModalLogoutContainer onClick={handleContainerClick}>
      <ModalBtnLogaut onClick={toggleConfirm}>Logout</ModalBtnLogaut>
      {isConfirmOpen && (
        <ModalBackdrop>
          <ModalConfirmContainer
            className={isClosing ? 'closing' : ''}
            onAnimationEnd={handleAnimationEnd}
          >
            <ModalConfirmTitle>
              Ви впевнені, що бажаєте вийти?
            </ModalConfirmTitle>
            <ButtonContainer>
              <ConfirmButton onClick={handleLogout}>Так, вийти</ConfirmButton>
              <CancelButton onClick={toggleConfirm}>Скасувати</CancelButton>
            </ButtonContainer>
          </ModalConfirmContainer>
        </ModalBackdrop>
      )}
    </ModalLogoutContainer>
  );
};
