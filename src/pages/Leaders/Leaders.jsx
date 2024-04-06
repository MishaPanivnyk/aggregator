import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LeaderImg,
  LeaderTextContainer,
  LeaderTitle,
  LeaderList,
  LeaderItem,
  LeaderItemTitle,
  LeaderItemDesc,
} from './Leaders.styled';

const Leaders = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await axios.get(
          'https://aggregator-django.onrender.com/top-universities/'
        );
        setLeaders(response.data);
      } catch (error) {
        console.error('Error fetching leaders:', error);
      }
    };

    fetchLeaders();
  }, []);

  return (
    <main>
      <LeaderTitle>Топ Університетів України</LeaderTitle>
      <LeaderList>
        {leaders.map((leader, index) => (
          <LeaderItem key={leader.id}>
            <LeaderImg src={leader.img} alt={leader.universityName} />
            <LeaderTextContainer>
              <LeaderItemTitle>
                <span>{leader.place}. </span>
                {leader.universityName}
              </LeaderItemTitle>
              <LeaderItemDesc>
                Усього заяв: <span>{leader.applicationsNumber}</span>
              </LeaderItemDesc>
              <LeaderItemDesc>
                Заяв на бюджет: <span>{leader.budgetApplications}</span>
              </LeaderItemDesc>
              <LeaderItemDesc>
                Середній конкурсний бал:
                <span> {leader.averageCompetitveScore}</span>
              </LeaderItemDesc>
              <LeaderItemDesc>
                Рік: <span>{leader.year}</span>
              </LeaderItemDesc>
            </LeaderTextContainer>
          </LeaderItem>
        ))}
      </LeaderList>
    </main>
  );
};

export default Leaders;
