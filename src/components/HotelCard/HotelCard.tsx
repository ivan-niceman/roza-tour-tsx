import { Link } from 'react-router-dom';

interface HotelCardProps {
  name: string;
  image: string;
  location: React.ReactNode; // Используем ReactNode, чтобы можно было вставлять <br> и <i>
  accommodation: React.ReactNode;
  meal: React.ReactNode;
  beach: React.ReactNode;
  description?: React.ReactNode;
  link: string;
  onOpenAdvice: () => void;
  hideButtons?: boolean;
}

export default function HotelCard(props: HotelCardProps) {
  return (
    <div className="bus-tours-hotel-grid">
      <div className="bus-tours-hotel-image">
        <h3 className="hotel-name">{props.name}</h3>
        <img src={props.image} alt={props.name} className="hotel-image" />
        {!props.hideButtons && (
          <button className="hotel-book-button" onClick={props.onOpenAdvice}>
            Забронировать
          </button>
        )}
      </div>
      <div className="bus-tours-hotel-info">
        <div>
          <p>
            <b>Расположение:</b>
          </p>{' '}
          <p>{props.location}</p>
          <p>
            <b>Условия проживания:</b>
          </p>{' '}
          <p>{props.accommodation}</p>
          <p>
            <b>Питание:</b>
          </p>{' '}
          <p>{props.meal}</p>
          <p>
            <b>Пляж:</b>
          </p>{' '}
          <p>{props.beach}</p>
          <p>
            <b>К услугам отдыхающих:</b>
          </p>{' '}
          <p>{props.description}</p>
        </div>
        {!props.hideButtons && (
          <Link to={`/${props.link}`} className="bus-tour-hotel-price-link">
            Смотреть цены
          </Link>
        )}
      </div>
    </div>
  );
}
