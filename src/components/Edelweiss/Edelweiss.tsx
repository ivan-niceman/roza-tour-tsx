import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Novomikhailovsky/edelweiss/1.jpg',
  '/images/bus-tours/Novomikhailovsky/edelweiss/2.jpg',
  '/images/bus-tours/Novomikhailovsky/edelweiss/3.jpg',
  '/images/bus-tours/Novomikhailovsky/edelweiss/4.jpg',
  '/images/bus-tours/Novomikhailovsky/edelweiss/5.jpg',
  '/images/bus-tours/Novomikhailovsky/edelweiss/6.jpg',
  '/images/bus-tours/Novomikhailovsky/edelweiss/7.jpg',
  '/images/bus-tours/Novomikhailovsky/edelweiss/8.jpg',
  '/images/bus-tours/Novomikhailovsky/edelweiss/10.jpg', // 9 пропущен
  '/images/bus-tours/Novomikhailovsky/edelweiss/11.jpg',
  '/images/bus-tours/Novomikhailovsky/edelweiss/12.jpg',
  '/images/bus-tours/Novomikhailovsky/edelweiss/13.jpg',
].map((src, index) => ({
  src,
  alt: `Гостевой дом Эдельвейс — фото ${index + 1}`,
}));

const priceRows = [
  { date: '08.06 – 17.06', single: 24200, multi: 16500, child: 12500 },
  { date: '15.06 – 24.06', single: 24200, multi: 16500, child: 12500 },
  { date: '22.06 – 01.07', single: 24700, multi: 17200, child: 12500 },
  { date: '29.06 – 08.07', single: 27500, multi: 18200, child: 13500 },
  { date: '06.07 – 15.07', single: 27900, multi: 18700, child: 13500 },
  { date: '13.07 – 22.07', single: 28500, multi: 19200, child: 13900 },
  { date: '20.07 – 29.07', single: 28500, multi: 19200, child: 13900 },
  { date: '27.07 – 05.08', single: 30500, multi: 20200, child: 14400 },
  { date: '03.08 – 12.08', single: 31500, multi: 20500, child: 15200 },
  { date: '10.08 – 19.08', single: 31500, multi: 20500, child: 15200 },
  { date: '17.08 – 26.08', single: 31500, multi: 20500, child: 15200 },
  { date: '24.08 – 02.09', single: 29500, multi: 20500, child: 15200 },
  { date: '31.08 – 09.09', single: 25900, multi: 17500, child: 13500 },
  { date: '07.09 – 16.09', single: 25900, multi: 17500, child: 13500 },
  { date: '14.09 – 23.09', single: 25900, multi: 17500, child: 13500 },
];

export default function Edelweiss({
  onOpenAdvice,
}: {
  onOpenAdvice: () => void;
}) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'edelweiss');
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

      <HotelGallery images={galleryImages} group="edelweiss" />

      <h2 className="price-tour">
        Стоимость тура на 7 ночей за одного человека, в рублях
      </h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Дата заезда 2026 год</th>
              <th>Одноместное размещение</th>
              <th>2-х, 3-х, 4-х местное размещение</th>
              <th>Доп. место для детей до 5 лет</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.single}</td>
                <td>{row.multi}</td>
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
