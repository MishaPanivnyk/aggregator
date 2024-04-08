import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sprite from 'img/sprite.svg';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  IconButton,
} from '@mui/material';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import {
  ComparisonContainer,
  ComparisonTitle,
  ErrorMessage,
} from './Comparison.styled';
import { ErrorIcon } from 'components/Error/Error.styled';

const Comparison = () => {
  const [comparedUniversities, setComparedUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchComparedUniversities = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/comparison/`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        setComparedUniversities(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching compared universities:', error);
      }
    };

    fetchComparedUniversities();
    // eslint-disable-next-line
  }, []);

  const removeFromComparison = async id => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/comparison/compare/remove/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
          data: {
            university_id: id,
          },
        }
      );

      const updatedUniversities = comparedUniversities.filter(
        university => university.id !== id
      );

      setComparedUniversities(updatedUniversities);
      toast.success('Успішно видалено з порівняння!');
    } catch (error) {
      console.error('Error removing university from comparison:', error);
      toast.error('Виникла помилка при видаленні!');
    }
  };

  return (
    <ComparisonContainer>
      <ComparisonTitle>Порівняння університетів</ComparisonTitle>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          {loading ? (
            <Loader />
          ) : comparedUniversities.length === 0 ? (
            <ErrorMessage>
              <ErrorIcon>
                <use href={sprite + '#icon-Error'} />
              </ErrorIcon>
              <p>Нічого немає!</p>
            </ErrorMessage>
          ) : (
            <TableContainer
              component={Paper}
              style={{
                border: '2px solid #00d254',
                marginTop: '20px',
                boxShadow: '0px 0px 20px 0px #00d254',
              }}
            >
              <Table aria-label="compared universities table">
                <TableHead>
                  <TableRow>
                    <TableCell className="title-center">Лого</TableCell>
                    <TableCell>Назва університету</TableCell>
                    <TableCell className="title-center">Локація</TableCell>
                    <TableCell>Рейтинг</TableCell>
                    <TableCell className="title-center">
                      Кількість відгуків
                    </TableCell>
                    <TableCell>Рівень акредитації</TableCell>
                    <TableCell className="title-center">Особливості</TableCell>
                    <TableCell className="title-center">
                      Дистанційна освіта
                    </TableCell>
                    <TableCell className="title-center">Ціна</TableCell>
                    <TableCell>Дія</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {comparedUniversities.map(university => (
                    <TableRow key={university.id}>
                      <TableCell>
                        <img
                          src={university.img}
                          alt={university.universityName}
                          className="img-university"
                        />
                      </TableCell>
                      <TableCell style={{ fontWeight: '600' }}>
                        {university.universityName}
                      </TableCell>
                      <TableCell className="title-center">
                        <svg width="17px" height="17px">
                          <use href={sprite + '#icon-location'} />
                        </svg>
                        {university.location}
                      </TableCell>
                      <TableCell className="title-center rating-container">
                        <svg width="14px" height="14px">
                          <use href={sprite + '#icon-star'} />
                        </svg>
                        {Math.round(university.rating * 10) / 10}
                      </TableCell>
                      <TableCell className="title-center">
                        {university.reviewCount}
                      </TableCell>
                      <TableCell>{university.accreditationLevel}</TableCell>
                      <TableCell>{university.features}</TableCell>
                      <TableCell className="title-center">
                        {university.remoteEducation}
                      </TableCell>
                      <TableCell className="title-center">
                        {university.price}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => removeFromComparison(university.id)}
                          aria-label="delete"
                        >
                          <svg width="15px" height="15px">
                            <use href={sprite + '#icon-header-close'} />
                          </svg>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>
    </ComparisonContainer>
  );
};

export default Comparison;
