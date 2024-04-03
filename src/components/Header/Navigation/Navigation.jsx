import React from 'react';
import { Link, Nav } from './Navigation.styled';

export const Navigation = ({ onClick }) => {
  return (
    <Nav>
      <Link to="/" onClick={onClick}>
        Головна
      </Link>
      <Link to="/universities" onClick={onClick}>
        Університети
      </Link>
      <Link to="/reviews" onClick={onClick}>
        Відгуки
      </Link>
      <Link to="/leaders" onClick={onClick}>
        Лідери
      </Link>
      <Link to="/blogs" onClick={onClick}>
        Блог
      </Link>
    </Nav>
  );
};
