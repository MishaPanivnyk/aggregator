import { Container } from 'components/Container/Container';
import { useMediaQuery } from 'react-responsive';
import {
  AdvantagesTitle,
  AdvantagesContainer,
  AdvantagesItemContainer,
  AdvantagesItem,
  AdvantagesItemTitle,
  AdvantagesItemDescription,
  AdvantagesIconContainer,
  AdvantagesUkdContainer,
  AdvantagesUkdLink,
  AdvantagesUkdImg,
} from './Advantages.styled';
import sprite from 'img/sprite.svg';
import ukdAD from 'img/ukd-ad.gif';

export const Advantages = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023px)',
  });

  const svgWidth = isMobile ? '40px' : isTablet ? '45px' : '60px';
  const svgHeight = isMobile ? '32px' : isTablet ? '36px' : '50px';

  return (
    <AdvantagesContainer>
      <Container>
        <AdvantagesUkdContainer>
          <AdvantagesUkdLink href="https://ukd.edu.ua/">
            <AdvantagesUkdImg
              class="lazy-loaded"
              src={ukdAD}
              data-lazy-type="image"
              alt="УКД Реклама"
            />
          </AdvantagesUkdLink>
        </AdvantagesUkdContainer>
        <AdvantagesTitle>Наші переваги</AdvantagesTitle>
        <AdvantagesItemContainer>
          <AdvantagesItem>
            <AdvantagesIconContainer>
              <svg width={svgWidth} height={svgHeight}>
                <use href={sprite + '#icon-advantages-video'} />
              </svg>

              <AdvantagesItemTitle>
                Великий вибір університетів
              </AdvantagesItemTitle>
            </AdvantagesIconContainer>

            <AdvantagesItemDescription>
              Ми акумулюємо велику кількість університетів з різних напрямків,
              дозволяючи порівнювати їх, та вибирати те, що вам подобається
            </AdvantagesItemDescription>
          </AdvantagesItem>
          <AdvantagesItem>
            <AdvantagesIconContainer>
              <svg width={svgWidth} height={svgHeight}>
                <use href={sprite + '#icon-advantages-search'} />
              </svg>

              <AdvantagesItemTitle>Актуальна інформація</AdvantagesItemTitle>
            </AdvantagesIconContainer>
            <AdvantagesItemDescription>
              Ми регулярно оновлюємо наші бази даних, щоб надавати вам тільки
              найсвіжішу інформацію про нові можливості, старт навчання, знижки
              та пропозиції від університетів
            </AdvantagesItemDescription>
          </AdvantagesItem>
          <AdvantagesItem>
            <AdvantagesIconContainer>
              <svg width={svgWidth} height={svgHeight}>
                <use href={sprite + '#icon-advantages-mic'} />
              </svg>

              <AdvantagesItemTitle>Швидкість пошуку</AdvantagesItemTitle>
            </AdvantagesIconContainer>
            <AdvantagesItemDescription>
              Агрегатор створений для заощадження вашого часу. Ви можете з
              легкістю знайти відповідний університет у нашому каталозі з різних
              фільтрів
            </AdvantagesItemDescription>
          </AdvantagesItem>
        </AdvantagesItemContainer>
      </Container>
    </AdvantagesContainer>
  );
};
