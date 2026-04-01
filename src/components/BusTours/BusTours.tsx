import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ContactBanner from '../ContactBanner/ContactBanner';
import { ALL_HOTELS } from '../../constants/hotels';

interface BusToursProps {
  onOpenAdvice: () => void;
}

interface BusTourItem {
  name: string;
  image: string;
  price: string;
  link: string;
  cityId: string;
}

function getTourWord(count: number): string {
  if (count >= 11 && count <= 19) return 'туров';
  const lastDigit = count % 10;
  if (lastDigit === 1) return 'тур';
  if (lastDigit >= 2 && lastDigit <= 4) return 'тура';
  return 'туров';
}

const busToursData: BusTourItem[] = [
  {
    name: 'Геленджик',
    image: './images/bus-tours/bus-1.webp',
    price: 'от 19 200 рублей',
    link: '/bus-tours/gelendzhik',
    cityId: 'gelendzhik',
  },
  {
    name: 'Кабардинка',
    image: './images/bus-tours/bus-2.webp',
    price: 'от 13 400 рублей',
    link: '/bus-tours/kabardinka',
    cityId: 'kabardinka',
  },
  {
    name: 'Дивноморское',
    image: './images/bus-tours/bus-3.webp',
    price: 'от 13 900 рублей',
    link: '/bus-tours/divnomorskoye',
    cityId: 'divnomorskoye',
  },
  {
    name: 'Новомихайловский',
    image: './images/bus-tours/bus-4.webp',
    price: 'от 16 500 рублей',
    link: '/bus-tours/novomikhailovsky',
    cityId: 'novomikhailovsky',
  },
  {
    name: 'Лермонтово',
    image: './images/bus-tours/bus-5.webp',
    price: 'от 15 300 рублей',
    link: '/bus-tours/lermontovo',
    cityId: 'lermontovo',
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
          {busToursData.map((tour) => {
            const count = ALL_HOTELS.filter(
              (h) => h.city === tour.cityId,
            ).length;

            return (
              <li key={tour.link} className="bus-tours-item">
                <Link className="bus-tours-link" to={tour.link}>
                  <img src={tour.image} alt={tour.name} />
                  <div className="bus-tour-description">
                    <p className="bus-tour-name">
                      {tour.name} ({count} {getTourWord(count)})
                    </p>
                    <p className="bus-tour-price">{tour.price}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ContactBanner onOpenAdvice={onOpenAdvice} />
    </>
  );
}
