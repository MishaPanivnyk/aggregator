import React from 'react';
import { Link, Nav } from './Navigation.styled';

export const Navigation = ({ onClick }) => {
  return (
    <Nav>
      <Link to="/" onClick={onClick}>
        Університети
      </Link>
      <Link to="/courser" onClick={onClick}>
        Курси
      </Link>
      <Link to="/reviews" onClick={onClick}>
        Відгуки
      </Link>
      <Link to="/actions" onClick={onClick}>
        Акції
      </Link>
      <Link to="/blogs" onClick={onClick}>
        Блог
      </Link>
    </Nav>
  );
};
