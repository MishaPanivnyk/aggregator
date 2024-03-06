import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container } from '../Container/Container';
import {
  HeaderBox,
  NavBox,
  Section,
  ModalMenuContainer,
  HeaderIconClose,
} from './Header.styled';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { Comparison } from './Comparison/Comparison';
import { Search } from './Search/Search';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { Link } from './Navigation/Navigation.styled';
import sprite from 'img/sprite.svg';

export const Header = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openMenu]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <HeaderBox>
        <Container>
          <Section>
            <Logo />
            <NavBox>
              {isDesktop && <Navigation />}
              <Comparison />
              <Search />
              {isMobile && <BurgerMenu onClick={toggleMenu} />}
            </NavBox>
            {openMenu && (
              <ModalMenuContainer>
                <HeaderIconClose onClick={toggleMenu}>
                  <svg width="20px" height="20px">
                    <use href={sprite + '#icon-header-close'} />
                  </svg>
                </HeaderIconClose>
                <Link to="/" onClick={toggleMenu}>
                  Університети
                </Link>
                <Link to="/courser" onClick={toggleMenu}>
                  Курси
                </Link>
                <Link to="/reviews" onClick={toggleMenu}>
                  Відгуки
                </Link>
                <Link to="/actions" onClick={toggleMenu}>
                  Акції
                </Link>
                <Link to="/blogs" onClick={toggleMenu}>
                  Блог
                </Link>
              </ModalMenuContainer>
            )}
          </Section>
        </Container>
      </HeaderBox>
    </>
  );
};
