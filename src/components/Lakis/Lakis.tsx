import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Cabardinka/lakis/1.webp',
  '/images/bus-tours/Cabardinka/lakis/2.webp',
  '/images/bus-tours/Cabardinka/lakis/3.webp',
  '/images/bus-tours/Cabardinka/lakis/4.webp',
  '/images/bus-tours/Cabardinka/lakis/5.webp',
  '/images/bus-tours/Cabardinka/lakis/6.webp',
  '/images/bus-tours/Cabardinka/lakis/7.webp',
  '/images/bus-tours/Cabardinka/lakis/8.webp',
  '/images/bus-tours/Cabardinka/lakis/9.webp',
  '/images/bus-tours/Cabardinka/lakis/10.webp',
  '/images/bus-tours/Cabardinka/lakis/11.webp',
  '/images/bus-tours/Cabardinka/lakis/12.webp',
  '/images/bus-tours/Cabardinka/lakis/13.webp',
  '/images/bus-tours/Cabardinka/lakis/14.webp',
  '/images/bus-tours/Cabardinka/lakis/15.webp',
  '/images/bus-tours/Cabardinka/lakis/16.webp',
  '/images/bus-tours/Cabardinka/lakis/17.webp',
  '/images/bus-tours/Cabardinka/lakis/18.webp',
  '/images/bus-tours/Cabardinka/lakis/19.webp',
].map((src, index) => ({
  src,
  alt: `Гостевой дом «Лакис» — фото ${index + 1}`,
}));

const priceRows = [
  {
    date: '05.06 – 14.06',
    single: 19900,
    double: 14500,
    triple: 15900,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '12.06 – 21.06',
    single: 26200,
    double: 17900,
    triple: 18900,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '19.06 – 28.06',
    single: 33200,
    double: 21200,
    triple: 19200,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '26.06 – 05.07',
    single: 38900,
    double: 23800,
    triple: 21200,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '03.07 – 12.07',
    single: 45600,
    double: 27400,
    triple: 23900,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '10.07 – 19.07',
    single: 46200,
    double: 28400,
    triple: 24900,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '17.07 – 26.07',
    single: 46200,
    double: 28400,
    triple: 24900,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '24.07 – 02.08',
    single: 46200,
    double: 28400,
    triple: 24900,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '31.07 – 09.08',
    single: 46200,
    double: 28400,
    triple: 24900,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '07.08 – 16.08',
    single: 46200,
    double: 28400,
    triple: 24900,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '14.08 – 23.08',
    single: 46200,
    double: 28400,
    triple: 24900,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '21.08 – 30.08',
    single: 46200,
    double: 28400,
    triple: 24900,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '28.08 – 06.09',
    single: 39500,
    double: 24400,
    triple: 21500,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '04.09 – 13.09',
    single: 34500,
    double: 21800,
    triple: 19800,
    child3: 8500,
    child5: 12700,
  },
  {
    date: '11.09 – 20.09',
    single: 34500,
    double: 21800,
    triple: 19800,
    child3: 8500,
    child5: 12700,
  },
];

export default function Lakis({ onOpenAdvice }: { onOpenAdvice: () => void }) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'lakis');
  const city = getCityData('kabardinka');
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

      <HotelGallery images={galleryImages} group="lakis" />

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
              <th>Дети до 3-х лет без места</th>
              <th>Дети до 5-х лет без места</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.single}</td>
                <td>{row.double}</td>
                <td>{row.triple}</td>
                <td>{row.child3}</td>
                <td>{row.child5}</td>
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
