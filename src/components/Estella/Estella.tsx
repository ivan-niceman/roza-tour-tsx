import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Novomikhailovsky/estella/1.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/2.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/3.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/4.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/5.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/6.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/7.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/8.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/10.jpg', // 9 пропущен
  '/images/bus-tours/Novomikhailovsky/estella/11.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/12.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/13.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/14.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/15.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/16.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/17.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/18.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/19.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/20.jpg',
  '/images/bus-tours/Novomikhailovsky/estella/21.jpg',
].map((src, index) => ({ src, alt: `Гостиница Эстелла — фото ${index + 1}` }));

const priceRows = [
  {
    date: '08.06 – 17.06',
    single: 29500,
    double: 19500,
    triple: 17700,
    child: 13900,
  },
  {
    date: '15.06 – 24.06',
    single: 29900,
    double: 19900,
    triple: 18200,
    child: 13900,
  },
  {
    date: '22.06 – 01.07',
    single: 33500,
    double: 21700,
    triple: 19300,
    child: 14400,
  },
  {
    date: '29.06 – 08.07',
    single: 33500,
    double: 21700,
    triple: 19300,
    child: 14400,
  },
  {
    date: '06.07 – 15.07',
    single: 33500,
    double: 22200,
    triple: 19800,
    child: 14900,
  },
  {
    date: '13.07 – 22.07',
    single: 34000,
    double: 22200,
    triple: 19800,
    child: 14900,
  },
  {
    date: '20.07 – 29.07',
    single: 38000,
    double: 23900,
    triple: 21000,
    child: 14900,
  },
  {
    date: '27.07 – 05.08',
    single: 38000,
    double: 23900,
    triple: 21000,
    child: 14900,
  },
  {
    date: '03.08 – 12.08',
    single: 38000,
    double: 23900,
    triple: 21000,
    child: 14900,
  },
  {
    date: '10.08 – 19.08',
    single: 38000,
    double: 23900,
    triple: 21000,
    child: 14900,
  },
  {
    date: '17.08 – 26.08',
    single: 38000,
    double: 23900,
    triple: 21000,
    child: 14900,
  },
  {
    date: '24.08 – 02.09',
    single: 37000,
    double: 22900,
    triple: 20000,
    child: 13900,
  },
  {
    date: '31.08 – 09.09',
    single: 37000,
    double: 22900,
    triple: 20000,
    child: 13900,
  },
  {
    date: '07.09 – 16.09',
    single: 33500,
    double: 21200,
    triple: 18800,
    child: 13900,
  },
  {
    date: '14.09 – 23.09',
    single: 33500,
    double: 21200,
    triple: 18800,
    child: 13900,
  },
];

export default function Estella({
  onOpenAdvice,
}: {
  onOpenAdvice: () => void;
}) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'estella');
  const city = getCityData('novomikhailovsky');
  if (!hotel) return null;

  return (
    <div className="hotel-container container">
      <h1 className="bus-tours-title">{hotel.name}</h1>

      {hotel.registryNumber && (
        <p className="bus-tours-num">
          Номер реестровой записи: {hotel.registryNumber}
        </p>
      )}

      {city && (
        <CityNav
          cityName={city.cityName}
          cityPath={city.cityPath}
          cityDescription={city.cityDescription}
          hotelName={hotel.name}
        />
      )}

      <HotelCard {...hotel} onOpenAdvice={onOpenAdvice} hideButtons={true} />

      <HotelGallery images={galleryImages} group="estella" />

      <h2 className="price-tour">
        Стоимость тура на 7 ночей за одного человека, в рублях
      </h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Дата заезда 2026 год</th>
              <th>Одноместное размещение</th>
              <th>2-х местное размещение</th>
              <th>3-х местное размещение</th>
              <th>Доп. место для детей до 10 лет</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.single}</td>
                <td>{row.double}</td>
                <td>{row.triple}</td>
                <td>{row.child}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="tour-paragraph-info">
        <b>В стоимость тура входит:</b> проезд на новом комфортабельном
        автобусе, проживание, страховка на время пути.
      </p>

      <button
        className="table-button banner-button-advice"
        onClick={onOpenAdvice}
      >
        Забронировать
      </button>
    </div>
  );
}
