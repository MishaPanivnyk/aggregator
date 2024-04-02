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
          2024 року. Для зручності використовуйте фільтри, порівняння та пошук.{' '}
          <br /> Ми оновлюємо інформацію про всі університети щороку.
        </UniversitiesDesc>
      </Container>
      <Universities />
    </main>
  );
};
export default MainPage;
