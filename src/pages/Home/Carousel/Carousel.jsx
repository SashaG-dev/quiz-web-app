import { useState, useEffect, useRef } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import CarouselCard from './CarouselCard/CarouselCard';
import carouselCardData from '../../../data/carouselCardData';
import './carousel.scss';

const Carousel = () => {
  const [card, setCard] = useState(0);
  const timer = useRef(null);

  const handleSlides = (e) => {
    const btn = e.target.closest('.carousel__btn');
    if (btn.classList.contains('left')) {
      if (card === 0) setCard(2);
      else setCard((prev) => prev - 1);
    }
    if (btn.classList.contains('right')) {
      if (card >= 2) setCard(0);
      else setCard((prev) => prev + 1);
    }
  };

  const clearTimer = (e) => {
    if (e.target?.closest('button')?.classList.contains('carousel__btn')) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    timer.current = setTimeout(() => {
      if (card >= 2) setCard(0);
      else setCard((prev) => prev + 1);
    }, 5000);

    document.addEventListener('click', clearTimer);

    return () => {
      clearTimeout(timer.current);
      document.removeEventListener('click', clearTimer);
    };
  });

  const cards = carouselCardData.map((data) => {
    return <CarouselCard key={data.id} {...data} />;
  });

  return (
    <div className="carousel">
      <div className="carousel__wrapper">
        <button
          className="carousel__btn carousel__btn--left left"
          title="View the previous slide"
          onClick={handleSlides}
        >
          {<BsArrowLeft />}
        </button>

        <div className="carousel__container">{cards[card]}</div>

        <button
          className="carousel__btn carousel__btn--right right"
          title="View the next slide"
          onClick={handleSlides}
        >
          {<BsArrowRight />}
        </button>
      </div>
    </div>
  );
};
export default Carousel;
