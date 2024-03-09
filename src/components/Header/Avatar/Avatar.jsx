import { Button } from './Avatar.styled';

export const Avatar = ({ onClick }) => {
  return (
    <div>
      <Button type="button" onClick={onClick}>
        <img
          src="https://www.wpthemedetector.com/ad/uploads/Gravatar-Logo.jpg"
          alt="avatar"
        />
      </Button>
    </div>
  );
};
