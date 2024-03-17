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
                <svg width="18px" height="18px">
                  <use href={sprite + '#icon-telegram'} />
                </svg>
              </SocItem>
              <SocItem>
                <svg width="18px" height="18px">
                  <use href={sprite + '#icon-instagram'} />
                </svg>
              </SocItem>
              <SocItem>
                <svg width="18px" height="18px">
                  <use href={sprite + '#icon-youtube'} />
                </svg>
              </SocItem>
              <SocItem>
                <svg width="18px" height="18px">
                  <use href={sprite + '#icon-facebook'} />
                </svg>
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
                    <CategoryItemLink>IT</CategoryItemLink>
                    <CategoryItemLink>Економіка</CategoryItemLink>
                    <CategoryItemLink>Право</CategoryItemLink>
                    <CategoryItemLink>Мистецтво</CategoryItemLink>
                    <CategoryItemLink>Сфера обслуговування</CategoryItemLink>
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
                    <CategoryItemLink>УКД</CategoryItemLink>
                    <CategoryItemLink>ПНУ</CategoryItemLink>
                    <CategoryItemLink>ІФНТУНГ</CategoryItemLink>
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
                    <CategoryItemLink>УКД</CategoryItemLink>
                    <CategoryItemLink>ПНУ</CategoryItemLink>
                    <CategoryItemLink>ІФНТУНГ</CategoryItemLink>
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
            © 2024. By ❤️<span>VDOMA</span> . Всі права захищені
          </CopyrightDesc>
        </Copyright>
      </Container>
    </FooterBox>
  );
};
