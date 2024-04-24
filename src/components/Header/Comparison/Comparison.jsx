import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from './Comparison.styled';
import sprite from 'img/sprite.svg';
import { useComparison } from './ComparisonContext';

export const Comparison = ({ onClick }) => {
  const { comparisonCount, setComparisonCount } = useComparison();
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchComparisonCount = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/comparison/`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        const count = response.data.length;
        setComparisonCount(count);
      } catch (error) {
        console.error('Error fetching comparison count:', error);
      }
    };

    fetchComparisonCount();
  }, [setComparisonCount, token]);

  return (
    <div>
      <Link to="/comparison" onClick={onClick}>
        <svg width="25px" height="30px">
          <use href={sprite + '#icon-comparison'} />
        </svg>
        <div className="comparison-count">{comparisonCount}</div>
      </Link>
    </div>
  );
};
