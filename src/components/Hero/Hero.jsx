import { Container } from 'components/Container/Container';
import { HeroTitle, HeroContainer, BottomText, HeroImg } from './Hero.styled';
import imageHero from 'img/hero.png';
import imageHeroTablet from 'img/hero-tab.png';
import imageHeroDesktop from 'img/hero-desc.png';
import { useMediaQuery } from 'react-responsive';

export const Hero = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023px)',
  });

  let imageUrl = imageHeroDesktop; // По умолчанию для десктопа

  if (isTablet) {
    imageUrl = imageHeroTablet; // Для планшета
  } else if (isMobile) {
    imageUrl = imageHero; // Для мобильных устройств
  }
  return (
    <HeroContainer>
      <Container>
        <HeroTitle>Агрегатор Університетів</HeroTitle>
        <BottomText>
          Порівнюємо університети. Ми — каталог-відгук університетів. Обирайте
          університет з відгуків, ціни, тривалості та інших критеріїв!
        </BottomText>
      </Container>
      <HeroImg src={imageUrl} alt="Hero"></HeroImg>
    </HeroContainer>
  );
};
