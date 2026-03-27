import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

interface CityNavProps {
  cityName: string;
  cityPath: string;
  cityDescription: React.ReactNode;
  hotelName?: string;
}
export default function CityNav({
  cityName,
  cityPath,
  cityDescription,
  hotelName,
}: CityNavProps) {
  return (
    <>
      <span className="bus-tours-map">
        <Link to="/">Главная</Link> /{'  '}
        <HashLink smooth to="/#services">
          Услуги
        </HashLink>{' '}
        /{'  '}
        <Link to="/bus-tours">
          Автобусные туры к морю в Краснодарский край из Белгорода
        </Link>{' '}
        /{' '}
        {hotelName ? (
          <>
            <Link to={cityPath}>{cityName}</Link> /{'  '}
            <p>{hotelName}</p>
          </>
        ) : (
          <p>{cityName}</p>
        )}
      </span>

      <h2 className="bus-tours-description">{cityDescription}</h2>
    </>
  );
}
