import { Link } from './Comparison.styled';
import sprite from 'img/sprite.svg';

export const Comparison = ({ onClick }) => {
  return (
    <div>
      <Link to="/comparison" onClick={onClick}>
        <svg width="28px" height="34px">
          <use href={sprite + '#icon-comparison'} />
        </svg>
      </Link>
    </div>
  );
};
