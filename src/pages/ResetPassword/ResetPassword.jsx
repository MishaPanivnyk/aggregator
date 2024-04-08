import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Container, Typography, TextField, Button } from '@mui/material';

const FormContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 135px;
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
  box-shadow: 5px 5px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const ResetPassword = () => {
  const { uidb64, token } = useParams();

  const [new_password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (new_password !== confirmPassword) {
      setError('Паролі не співпадають');
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/reset-password/${uidb64}/${token}/`,
        {
          new_password,
        }
      );
      setSuccess(true);
      console.log(response);
      setError('');

      // Перенаправлення на головну сторінку після успішного скидання паролю
      window.location.href = '/aggregator/';
    } catch (error) {
      setError('Щось пішло не так. Будь ласка, спробуйте ще раз.');
    }
  };

  return (
    <main>
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
                value={new_password}
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
