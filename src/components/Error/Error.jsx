import { Container } from '../Container/Container';
import {
  ErrorSection,
  ErrorTitle,
  ErrorDesc,
  ErrorIcon,
  BackButton,
  BackButtonContainer,
} from './Error.styled';
import sprite from 'img/sprite.svg';
import { FaHome } from 'react-icons/fa';

export const Error = ({ onClick }) => {
  return (
    <ErrorSection>
      <Container>
        <ErrorIcon width="70px" height="70px">
          <use href={sprite + '#icon-Error'} />
        </ErrorIcon>
        <ErrorTitle>Сторінка не знайдена!</ErrorTitle>
        <ErrorDesc>
          Можливо, вона застаріла, була видалена, або була введена невірна
          адреса в адресному рядку
        </ErrorDesc>
        <BackButtonContainer>
          <BackButton to="/" onClick={onClick}>
            На Головну
            <FaHome style={{ marginLeft: '10px' }} />
          </BackButton>
        </BackButtonContainer>
      </Container>
    </ErrorSection>
  );
};
