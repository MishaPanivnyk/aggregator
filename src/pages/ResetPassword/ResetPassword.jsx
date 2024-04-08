import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { Container, Typography, TextField, Button } from '@mui/material';

const moveBackground = keyframes`
  from {
    transform: translate3d(0px, 0px, 0px);
  }
  to {
    transform: translate3d(1000px, 0px, 0px);
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const BackgroundImage = styled.img`
  height: 70vh;
  width: 70vh;
  position: absolute;
  z-index: 3;
  right: 20px;
`;

const Stars = styled.div`
  background: black
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  z-index: 0;
`;

const Twinkling = styled.div`
  width: 10000px;
  height: 100%;
  background: transparent
    url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png')
    repeat;
  background-size: 1000px 1000px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  animation: ${moveBackground} 70s linear infinite;
`;

const Clouds = styled.div`
  width: 10000px;
  height: 100%;
  background: transparent
    url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png')
    repeat;
  background-size: 1000px 1000px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  animation: ${moveBackground} 150s linear infinite;
`;

const FormContainer = styled(Container)`
  position: relative;
  z-index: 2;
`;

const FormWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 400px;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const ResetPassword = () => {
  const { uidb64, token } = useParams();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Паролі не співпадають');
      return;
    }

    try {
      const response = await axios.post(`reset-password/${uidb64}/${token}/`, {
        password,
      });
      setSuccess(true);
      console.log(response);
      setError('');

      // Перенаправлення на головну сторінку після успішного скидання паролю
      window.location.href = '/';
    } catch (error) {
      setError('Щось пішло не так. Будь ласка, спробуйте ще раз.');
    }
  };

  return (
    <main>
      <BackgroundContainer>
        <BackgroundImage
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
        />
        <Stars />
        <Twinkling />
        <Clouds />
      </BackgroundContainer>
      <FormContainer>
        <FormWrapper>
          <Typography
            variant="h5"
            component="h2"
            style={{ marginBottom: '8px' }}
          >
            Скидання паролю
          </Typography>
          {success ? (
            <Typography style={{ color: 'green', marginBottom: '8px' }}>
              Пароль успішно скинутий!
            </Typography>
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                fullWidth
                type="password"
                label="Новий пароль"
                style={{ marginBottom: '8px' }}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <TextField
                variant="outlined"
                fullWidth
                type="password"
                label="Підтвердіть пароль"
                style={{ marginBottom: '8px' }}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />
              {error && (
                <Typography style={{ color: 'red', marginBottom: '8px' }}>
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{
                  marginTop: '8px',
                  color: 'white',
                  background: '#01E45C',
                }}
              >
                Скинути пароль
              </Button>
            </form>
          )}
        </FormWrapper>
      </FormContainer>
    </main>
  );
};

export default ResetPassword;
