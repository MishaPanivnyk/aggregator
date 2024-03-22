import { Hero } from 'components/Hero/Hero';
import { Advantages } from 'components/Advantages/Advantages';
import { Blog } from 'components/Blog/Blog';
import { UniversitiesSwiper } from 'components/UniversitiesSwiper/UniversitiesSwiper';

const MainPage = () => {
  return (
    <main>
      <Hero />
      <Advantages />
      <UniversitiesSwiper/>
      <Blog />
    </main>
  );
};
export default MainPage;
