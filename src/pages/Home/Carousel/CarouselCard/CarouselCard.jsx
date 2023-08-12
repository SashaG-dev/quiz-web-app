import { Link } from 'react-router-dom';
import './carousel-card.scss';

const CarouselCard = ({ id, title, description, cta, link }) => {
  return (
    <div className={`carousel-card ${id}`}>
      <h1
        className="carousel-card__title
      heading-primary"
      >
        {title}
      </h1>
      <p className="carousel-card__desc">{description}</p>
      <Link to={link} className="carousel-card__cta btn" title={cta}>
        {cta}
      </Link>
    </div>
  );
};
export default CarouselCard;
