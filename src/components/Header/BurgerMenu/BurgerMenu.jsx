import sprite from 'img/sprite.svg';
import { Button } from './BurgerMenu.styled';
export const BurgerMenu = ({ onClick }) => {
  return (
    <div>
      <Button type="button" onClick={onClick} aria-label="Menu">
        <svg width="20px" height="20px">
          <use href={sprite + '#icon-burger'} />
        </svg>
      </Button>
    </div>
  );
};
