import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  ModalContainer,
  ModalBackdrop,
  ModalTitle,
  ModalLabel,
  ModalBtn,
  ModalInput,
  ModalDesc,
  CloseButton,
} from './ModalAuth.styled';
import sprite from 'img/sprite.svg';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export const ModalAuth = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  });
  const [isClosing, setIsClosing] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/login/`,
          formData
        );
        localStorage.setItem('token', response.data.token);
        toast.success('Ви успішно увійшли!');
        console.log('Logged in successfully:', response.data);
      } else {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/register/`,
          formData
        );
        localStorage.setItem('token', response.data.token);
        toast.success('Ви успішно зареєстровані!');
        console.log('Registered successfully:', response.data.token);
      }
      setIsClosing(true);
    } catch (error) {
      if (isLogin) {
        toast.error('Помилка входу!');
      } else {
        toast.error('Помилка реєстрації!');
      }
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsClosing(false);
      onClose();
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <>
      <ModalBackdrop onClick={onClose} />
      <ModalContainer
        className={isClosing ? 'closing' : ''}
        onAnimationEnd={handleAnimationEnd}
      >
        <CloseButton onClick={handleClose}>
          <svg width="20px" height="20px">
            <use href={sprite + '#icon-header-close'} />
          </svg>
        </CloseButton>
        <ModalTitle>{isLogin ? 'Login to UMatch' : 'Join UMatch'}</ModalTitle>
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <ModalLabel>Username:</ModalLabel>
              <ModalInput
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </>
          ) : (
            <>
              <ModalLabel>Username:</ModalLabel>
              <ModalInput
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <ModalLabel>Email:</ModalLabel>
              <ModalInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </>
          )}
          <ModalLabel>Password:</ModalLabel>
          <div style={{ position: 'relative' }}>
            <ModalInput
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            {showPassword ? (
              <FiEyeOff
                onClick={toggleShowPassword}
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '30px',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
              />
            ) : (
              <FiEye
                onClick={toggleShowPassword}
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '30px',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
              />
            )}
          </div>
          {!isLogin && (
            <>
              <ModalLabel>Confirm Password:</ModalLabel>
              <div style={{ position: 'relative' }}>
                <ModalInput
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
                {showConfirmPassword ? (
                  <FiEyeOff
                    onClick={toggleShowConfirmPassword}
                    style={{
                      position: 'absolute',
                      right: '20px',
                      top: '30px',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                      fontSize: '20px',
                    }}
                  />
                ) : (
                  <FiEye
                    onClick={toggleShowConfirmPassword}
                    style={{
                      position: 'absolute',
                      right: '20px',
                      top: '30px',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                      fontSize: '20px',
                    }}
                  />
                )}
              </div>
            </>
          )}

          <ModalBtn type="submit">{isLogin ? 'Login' : 'Sign Up'}</ModalBtn>
        </form>
        <ModalDesc>
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                disabled={isInputFocused}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                disabled={isInputFocused}
              >
                Login
              </button>
            </>
          )}
        </ModalDesc>
      </ModalContainer>
    </>
  );
};
