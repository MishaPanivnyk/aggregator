import logo from 'img/Logo1.svg';
import { Link, LogoContainer } from './Logo.styled';

export const Logo = ({ onClick }) => {
  return (
    <LogoContainer>
      <Link to="/" onClick={onClick}>
        <img src={logo} alt="logo" />
        <span>UMatch</span>
      </Link>
    </LogoContainer>
  );
};
