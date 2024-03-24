import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import {
  UniversitiesContainer,
  NextButton,
  PrevButton,
  UniversitiesTitle,
  ImgContainer,
  SwiperContainer,
  CenteredSwiper,
} from './UniversitiesSwiper.styled';

SwiperCore.use([Navigation, Pagination]);
export const UniversitiesSwiper = () => {
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/universities/`
        );
        const universitiesToDisplay = response.data.filter(university => {
          const desiredUniversityNames = [
            'Університет Короля Данила',
            'Прикарпатський національний університет імені Василя Стефаника',
            'Державний університет інфраструктури та технологій (ДУІТ)',
            'Київський національний університет технологій та дизайну (КНУТД)',
            'Тернопільський національний технічний університет',
            'Західноукраїнський національний університет',
            'Житомирський державний університет імені Івана Франка',
            'Національний університет охорони здоров’я України імені П. Л. Шупика (НУОЗ)',
            'Хмельницький університет економіки і підприємництва',
            'Львівський національний університет природокористування',
          ];
          return desiredUniversityNames.includes(university.universityName);
        });
        setUniversities(universitiesToDisplay);
        setIsLoading(false);
      } catch (error) {
        console.error('There was a problem fetching universities:', error);
        setIsLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  return (
    <UniversitiesContainer>
      <Container>
        <UniversitiesTitle>Університети</UniversitiesTitle>
        {isLoading ? (
          <Loader />
        ) : (
          <SwiperContainer>
            <CenteredSwiper>
              <Swiper
                centeredSlides={true}
                spaceBetween={30}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
              >
                {universities.map((university, index) => (
                  <SwiperSlide key={index}>
                    <ImgContainer>
                      <img src={university.img} alt="Univesity" />
                    </ImgContainer>
                  </SwiperSlide>
                ))}
                <NextButton className="swiper-button-next"></NextButton>
                <PrevButton className="swiper-button-prev"></PrevButton>
              </Swiper>
            </CenteredSwiper>
          </SwiperContainer>
        )}
      </Container>
    </UniversitiesContainer>
  );
};
