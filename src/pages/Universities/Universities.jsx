import { Universities } from 'components/Universities/Universities';
import { UniversitiesDesc, UniversitiesTitle } from './Universities.styled';
import { Container } from 'components/Container/Container';

const MainPage = () => {
  return (
    <main>
      <Container>
        <UniversitiesTitle>Університети</UniversitiesTitle>
        <UniversitiesDesc>
          Список усіх університетів з рейтингом, відгуками та детальним описом
          курсу 2024 року. Для зручності пошуку курсу використовуйте фільтри,
          сортування, порівняння та пошук. <br /> Ми оновлюємо інформацію про
          всі курси щотижня.
        </UniversitiesDesc>
      </Container>
      <Universities />
    </main>
  );
};
export default MainPage;
