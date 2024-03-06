import { Container } from '../Container/Container';
import { ErrorSection, ErrorTitle, ErrorDesc, ErrorIcon } from './Error.styled';
import sprite from 'img/sprite.svg';
export const Error = () => {
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
      </Container>
    </ErrorSection>
  );
};
