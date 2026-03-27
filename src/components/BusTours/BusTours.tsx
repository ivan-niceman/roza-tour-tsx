import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ContactBanner from '../ContactBanner/ContactBanner';

interface BusToursProps {
  onOpenAdvice: () => void;
}

interface BusTourItem {
  name: string;
  image: string;
  price: string;
  link: string;
  toursCount: string;
}

const busToursData: BusTourItem[] = [
  {
    name: 'Геленджик',
    image: './images/bus-tours/bus-1.webp',
    toursCount: '1 тур',
    price: 'от 19 200 рублей',
    link: '/bus-tours/gelendzhik',
  },
  {
    name: 'Кабардинка',
    image: './images/bus-tours/bus-2.webp',
    toursCount: '2 тура',
    price: 'от 13 400 рублей',
    link: '/bus-tours/kabardinka',
  },
  {
    name: 'Дивноморское',
    image: './images/bus-tours/bus-3.webp',
    toursCount: '2 тура',
    price: 'от 13 900 рублей',
    link: '/bus-tours/divnomorskoye',
  },
  {
    name: 'Новомихайловский',
    image: './images/bus-tours/bus-4.webp',
    toursCount: '3 тура',
    price: 'от 16 500 рублей',
    link: '/bus-tours/novomikhailovsky',
  },
  {
    name: 'Лермонтово',
    image: './images/bus-tours/bus-5.webp',
    toursCount: '2 тура',
    price: 'от 15 300 рублей',
    link: '/bus-tours/lermontovo',
  },
];

export default function BusTours({ onOpenAdvice }: BusToursProps) {
  return (
    <>
      <div className="hotel-container container">
        <h1 className="bus-tours-title">
          Автобусные туры к морю в Краснодарский край из Белгорода
        </h1>

        <span className="bus-tours-map">
          <Link to="/">Главная</Link> /{' '}
          <HashLink smooth to="/#services">
            Услуги
          </HashLink>{' '}
          / <p>Автобусные туры к морю в Краснодарский край из Белгорода</p>
        </span>

        <h2 className="bus-tours-subtitle">
          Проезд на комфортабельном автобусе
        </h2>

        <ul className="bus-tours-list">
          {busToursData.map((tour, index) => (
            <li key={index} className="bus-tours-item">
              <Link className="bus-tours-link" to={tour.link}>
                <img src={tour.image} alt={tour.name} />
                <div className="bus-tour-description">
                  <p className="bus-tour-name">
                    {tour.name} ({tour.toursCount})
                  </p>
                  <p className="bus-tour-price">{tour.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ContactBanner onOpenAdvice={onOpenAdvice} />
    </>
  );
}
