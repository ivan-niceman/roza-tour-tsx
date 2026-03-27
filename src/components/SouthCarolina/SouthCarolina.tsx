import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Novomikhailovsky/south-carolina/1.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/2.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/3.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/4.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/5.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/6.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/7.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/8.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/9.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/10.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/11.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/12.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/13.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/14.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/15.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/16.webp',
  '/images/bus-tours/Novomikhailovsky/south-carolina/17.webp',
].map((src, index) => ({
  src,
  alt: `Отель Южная Каролина — фото ${index + 1}`,
}));

const priceRows = [
  {
    date: '08.06 – 17.06',
    single: 32200,
    double: 20400,
    triple: 17900,
    quad: 16500,
    child: 13400,
  },
  {
    date: '15.06 – 24.06',
    single: 33200,
    double: 21400,
    triple: 18400,
    quad: 16900,
    child: 13400,
  },
  {
    date: '22.06 – 01.07',
    single: 33700,
    double: 21800,
    triple: 18800,
    quad: 17300,
    child: 13900,
  },
  {
    date: '29.06 – 08.07',
    single: 39700,
    double: 24500,
    triple: 20700,
    quad: 18600,
    child: 13900,
  },
  {
    date: '06.07 – 15.07',
    single: 42500,
    double: 26300,
    triple: 22500,
    quad: 20200,
    child: 16500,
  },
  {
    date: '13.07 – 22.07',
    single: 45500,
    double: 27800,
    triple: 24500,
    quad: 21800,
    child: 16500,
  },
  {
    date: '20.07 – 29.07',
    single: 45500,
    double: 27800,
    triple: 24500,
    quad: 21800,
    child: 16500,
  },
  {
    date: '27.07 – 05.08',
    single: 45500,
    double: 27800,
    triple: 24500,
    quad: 21800,
    child: 16500,
  },
  {
    date: '03.08 – 12.08',
    single: 45500,
    double: 27800,
    triple: 24500,
    quad: 21800,
    child: 16500,
  },
  {
    date: '10.08 – 19.08',
    single: 45500,
    double: 27800,
    triple: 24500,
    quad: 21800,
    child: 16500,
  },
  {
    date: '17.08 – 26.08',
    single: 45500,
    double: 27800,
    triple: 24500,
    quad: 21800,
    child: 16500,
  },
  {
    date: '24.08 – 02.09',
    single: 42500,
    double: 26200,
    triple: 22500,
    quad: 20200,
    child: 16500,
  },
  {
    date: '31.08 – 09.09',
    single: 39500,
    double: 24500,
    triple: 20900,
    quad: 18900,
    child: 13900,
  },
  {
    date: '07.09 – 16.09',
    single: 39500,
    double: 24500,
    triple: 20900,
    quad: 18900,
    child: 13900,
  },
  {
    date: '14.09 – 23.09',
    single: 33700,
    double: 21800,
    triple: 19900,
    quad: 17300,
    child: 13900,
  },
];

export default function SouthCarolina({
  onOpenAdvice,
}: {
  onOpenAdvice: () => void;
}) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'south-carolina');
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

      <HotelGallery images={galleryImages} group="south-carolina" />

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
              <th>4-х местное размещение</th>
              <th>Доп. место до 12-ти лет</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.single}</td>
                <td>{row.double}</td>
                <td>{row.triple}</td>
                <td>{row.quad}</td>
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
