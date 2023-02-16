import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { Navigation, Pagination, A11y } from 'swiper';
import { Link as RouterLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { QuizCard } from '../QuizCard/QuizCard';
import styles from './Profile.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  const allCards = useAppSelector((state) => state.cards.list);
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {allCards.map((card, index) => (
        <SwiperSlide>
          <RouterLink key={card.id} style={{ textDecoration: 'none' }} to={`/test/${card.id}`}>
            <QuizCard
              key={card.id}
              date={''}
              desription={''}
              questionsArr={[]}
              passed={false}
              passedOn={0}
              card={card}
            />
          </RouterLink>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
