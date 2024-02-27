import { Link } from './Search.styled';
import sprite from 'img/sprite.svg';

export const Search = ({ onClick }) => {
  return (
    <div>
      <Link to="/search" onClick={onClick}>
        <svg width="20px" height="20px">
          <use href={sprite + '#icon-search'} />
        </svg>
      </Link>
    </div>
  );
};
