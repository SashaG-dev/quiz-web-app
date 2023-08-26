import { Link } from 'react-router-dom';
import './carousel-card.scss';

const CarouselCard = ({ id, title, description, cta, link, slide }) => {
  return (
    <div className={`carousel-card ${id}`} aria-label={`Slide ${slide} of 3`}>
      <h1 className="carousel-card__title">{title}</h1>
      <p className="carousel-card__desc">{description}</p>
      <Link to={link} className="carousel-card__cta btn" title={cta}>
        {cta}
      </Link>
    </div>
  );
};
export default CarouselCard;
