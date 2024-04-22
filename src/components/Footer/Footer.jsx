import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  FooterBox,
  Section,
  FooterLogoContainer,
  FooterLogo,
  SocList,
  SocItem,
  CategoryList,
  CategoryItem,
  CategoryItemTitle,
  CategoryBoxItemLink,
  CategoryItemLink,
  Copyright,
  CopyrightInfo,
  CopyrightDesc,
  CategoryContainer,
  SocItemLink,
  CopyrightDescTeam,
} from './Footer.styled';
import logo from 'img/Logo-footer.png';
import sprite from 'img/sprite.svg';
import { Container } from 'components/Container/Container';
export const Footer = ({ onClick }) => {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [isOpen, setIsOpen] = useState([
    isTabletOrDesktop,
    isTabletOrDesktop,
    isTabletOrDesktop,
    isTabletOrDesktop,
  ]);

  const handleClick = index => {
    setIsOpen(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useEffect(() => {
    setIsOpen([
      isTabletOrDesktop,
      isTabletOrDesktop,
      isTabletOrDesktop,
      isTabletOrDesktop,
    ]);
  }, [isTabletOrDesktop]);

  return (
    <FooterBox>
      <Container>
        <Section>
          <FooterLogoContainer>
            <FooterLogo to="/" onClick={onClick}>
              <img src={logo} alt="logo" width="100px" height="100px" />
            </FooterLogo>
            <SocList>
              <SocItem>
                <SocItemLink href="https://t.me/diwwmix">
                  <svg width="18px" height="18px">
                    <use href={sprite + '#icon-telegram'} />
                  </svg>
                </SocItemLink>
              </SocItem>
              <SocItem>
                <SocItemLink href="https://www.instagram.com/_nasti4ka.s_?igsh=MjZiMXB3aTQ5aXp6">
                  <svg width="18px" height="18px">
                    <use href={sprite + '#icon-instagram'} />
                  </svg>
                </SocItemLink>
              </SocItem>
              <SocItem>
                <SocItemLink href="https://youtu.be/I7mrN3Qt6TE?si=-HlG8S_ZdR1uX1Sg">
                  <svg width="18px" height="18px">
                    <use href={sprite + '#icon-youtube'} />
                  </svg>
                </SocItemLink>
              </SocItem>
              <SocItem>
                <SocItemLink href="https://www.facebook.com/profile.php?id=100035212537406&locale=uk_UA">
                  <svg width="18px" height="18px">
                    <use href={sprite + '#icon-facebook'} />
                  </svg>
                </SocItemLink>
              </SocItem>
            </SocList>
          </FooterLogoContainer>
          <CategoryContainer>
            <CategoryList>
              <CategoryItem>
                <CategoryItemTitle onClick={() => handleClick(0)}>
                  Напрями
                  {isMobile && (
                    <svg width="10px" height="10px">
                      <use
                        href={
                          isOpen[0]
                            ? sprite + '#icon-footer-minus'
                            : sprite + '#icon-footer-plus'
                        }
                      />
                    </svg>
                  )}
                </CategoryItemTitle>
                {isOpen[0] && (
                  <CategoryBoxItemLink>
                    <CategoryItemLink to={'/universities'}>IT</CategoryItemLink>
                    <CategoryItemLink to={'/universities'}>
                      Економіка
                    </CategoryItemLink>
                    <CategoryItemLink to={'/universities'}>
                      Право
                    </CategoryItemLink>
                    <CategoryItemLink to={'/universities'}>
                      Мистецтво
                    </CategoryItemLink>
                    <CategoryItemLink to={'/universities'}>
                      Сфера обслуговування
                    </CategoryItemLink>
                  </CategoryBoxItemLink>
                )}
              </CategoryItem>
              <CategoryItem>
                <CategoryItemTitle onClick={() => handleClick(1)}>
                  Університети
                  {isMobile && (
                    <svg width="10px" height="10px">
                      <use
                        href={
                          isOpen[1]
                            ? sprite + '#icon-footer-minus'
                            : sprite + '#icon-footer-plus'
                        }
                      />
                    </svg>
                  )}
                </CategoryItemTitle>
                {isOpen[1] && (
                  <CategoryBoxItemLink>
                    <CategoryItemLink to={'/universities/737b26a370a355e9'}>
                      УКД
                    </CategoryItemLink>
                    <CategoryItemLink to={'/universities/f5e4b20ce01c4cbc'}>
                      ПНУ
                    </CategoryItemLink>
                    <CategoryItemLink to={'/universities/ac7dd890c7c5b49d'}>
                      ІФНТУНГ
                    </CategoryItemLink>
                  </CategoryBoxItemLink>
                )}
              </CategoryItem>
              <CategoryItem>
                <CategoryItemTitle onClick={() => handleClick(2)}>
                  Відгуки
                  {isMobile && (
                    <svg width="10px" height="10px">
                      <use
                        href={
                          isOpen[2]
                            ? sprite + '#icon-footer-minus'
                            : sprite + '#icon-footer-plus'
                        }
                      />
                    </svg>
                  )}
                </CategoryItemTitle>
                {isOpen[2] && (
                  <CategoryBoxItemLink>
                    <CategoryItemLink
                      to={'/universities/737b26a370a355e9#review'}
                    >
                      УКД
                    </CategoryItemLink>
                    <CategoryItemLink
                      to={'/universities/f5e4b20ce01c4cbc#review'}
                    >
                      ПНУ
                    </CategoryItemLink>
                    <CategoryItemLink
                      to={'/universities/ac7dd890c7c5b49d#review'}
                    >
                      ІФНТУНГ
                    </CategoryItemLink>
                  </CategoryBoxItemLink>
                )}
              </CategoryItem>
              <CategoryItem>
                <CategoryItemTitle onClick={() => handleClick(3)}>
                  Рівні
                  {isMobile && (
                    <svg width="10px" height="10px">
                      <use
                        href={
                          isOpen[3]
                            ? sprite + '#icon-footer-minus'
                            : sprite + '#icon-footer-plus'
                        }
                      />
                    </svg>
                  )}
                </CategoryItemTitle>
                {isOpen[3] && (
                  <CategoryBoxItemLink>
                    <CategoryItemLink>Бакалавр</CategoryItemLink>
                    <CategoryItemLink>Магістр</CategoryItemLink>
                  </CategoryBoxItemLink>
                )}
              </CategoryItem>
            </CategoryList>
          </CategoryContainer>
        </Section>
        <Copyright>
          <CopyrightInfo>Угода користувача</CopyrightInfo>
          <CopyrightDesc>
            © 2024. By ❤️{' '}
            <CopyrightDescTeam to="/roulette">VDOMA</CopyrightDescTeam>. Всі
            права захищені
          </CopyrightDesc>
        </Copyright>
      </Container>
    </FooterBox>
  );
};
