import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Gelendzhik/neolit/1.webp',
  '/images/bus-tours/Gelendzhik/neolit/2.webp',
  '/images/bus-tours/Gelendzhik/neolit/3.webp',
  '/images/bus-tours/Gelendzhik/neolit/4.webp',
  '/images/bus-tours/Gelendzhik/neolit/5.webp',
  '/images/bus-tours/Gelendzhik/neolit/6.webp',
  '/images/bus-tours/Gelendzhik/neolit/7.webp',
  '/images/bus-tours/Gelendzhik/neolit/8.webp',
  '/images/bus-tours/Gelendzhik/neolit/10.webp',
  '/images/bus-tours/Gelendzhik/neolit/11.webp',
  '/images/bus-tours/Gelendzhik/neolit/12.webp',
  '/images/bus-tours/Gelendzhik/neolit/13.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_073927.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_073940.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_073952.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074004.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074009.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074025.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074050.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074100.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074117.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074128.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074133.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074143.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074207.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074246.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074300.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074902.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074911.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074945.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_074959.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_075015.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_075040.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_075050.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_075053.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_075104.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_075116.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_075128.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_075210.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_075210_1.webp',
  '/images/bus-tours/Gelendzhik/neolit/IMG_20230916_075216.webp',
].map((src, index) => ({ src, alt: `Отель НЕОЛИТ — фото ${index + 1}` }));

const priceRows = [
  {
    date: '05.06 – 14.06',
    single: 36500,
    double: 22500,
    triple: 19200,
    quad: 19900,
    child: 13500,
  },
  {
    date: '12.06 – 21.06',
    single: 36500,
    double: 22500,
    triple: 19200,
    quad: 19900,
    child: 13500,
  },
  {
    date: '19.06 – 28.06',
    single: 37000,
    double: 23200,
    triple: 19700,
    quad: 20500,
    child: 14000,
  },
  {
    date: '26.06 – 05.07',
    single: 39900,
    double: 24500,
    triple: 21200,
    quad: 21500,
    child: 14000,
  },
  {
    date: '03.07 – 12.07',
    single: 44200,
    double: 26500,
    triple: 23200,
    quad: 23200,
    child: 14000,
  },
  {
    date: '10.07 – 19.07',
    single: 44900,
    double: 27200,
    triple: 24200,
    quad: 24200,
    child: 14900,
  },
  {
    date: '17.07 – 26.07',
    single: 44900,
    double: 27200,
    triple: 24200,
    quad: 24200,
    child: 14900,
  },
  {
    date: '24.07 – 02.08',
    single: 44900,
    double: 27200,
    triple: 24200,
    quad: 24200,
    child: 14900,
  },
  {
    date: '31.07 – 09.08',
    single: 44900,
    double: 27200,
    triple: 24200,
    quad: 24200,
    child: 14900,
  },
  {
    date: '07.08 – 16.08',
    single: 44900,
    double: 27200,
    triple: 24200,
    quad: 24200,
    child: 14900,
  },
  {
    date: '14.08 – 23.08',
    single: 44900,
    double: 27200,
    triple: 24200,
    quad: 24200,
    child: 14900,
  },
  {
    date: '21.08 – 30.08',
    single: 44900,
    double: 27200,
    triple: 24200,
    quad: 24200,
    child: 14900,
  },
  {
    date: '28.08 – 06.09',
    single: 39500,
    double: 24300,
    triple: 21500,
    quad: 21900,
    child: 14000,
  },
  {
    date: '04.09 – 13.09',
    single: 35600,
    double: 22500,
    triple: 20500,
    quad: 20900,
    child: 14000,
  },
  {
    date: '11.09 – 20.09',
    single: 35600,
    double: 22500,
    triple: 20500,
    quad: 20900,
    child: 14000,
  },
];

export default function Neolit({ onOpenAdvice }: { onOpenAdvice: () => void }) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'neolit');
  const city = getCityData('gelendzhik');
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

      <HotelGallery images={galleryImages} group="neolit" />

      <h2 className="price-tour">
        Стоимость тура на 7 ночей за одного человека, в рублях
      </h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Дата&nbsp;заезда 2026 год</th>
              <th>Одноместное размещение</th>
              <th>2-х местное размещение</th>
              <th>3-х местное размещение</th>
              <th>4-х местное размещение (2-х комн. номер)</th>
              <th>
                Доп.место
                <br />
                для детей
                <br />
                до 10 лет
              </th>
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
