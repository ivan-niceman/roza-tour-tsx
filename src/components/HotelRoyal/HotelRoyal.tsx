import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Cabardinka/royal/1.jpg',
  '/images/bus-tours/Cabardinka/royal/2.jpg',
  '/images/bus-tours/Cabardinka/royal/3.jpg',
  '/images/bus-tours/Cabardinka/royal/4.jpg',
  '/images/bus-tours/Cabardinka/royal/5.jpg',
  '/images/bus-tours/Cabardinka/royal/6.jpg',
  '/images/bus-tours/Cabardinka/royal/7.jpg',
  '/images/bus-tours/Cabardinka/royal/8.jpg',
  '/images/bus-tours/Cabardinka/royal/9.jpg',
  '/images/bus-tours/Cabardinka/royal/10.jpg',
  '/images/bus-tours/Cabardinka/royal/11.jpg',
  '/images/bus-tours/Cabardinka/royal/12.jpg',
  '/images/bus-tours/Cabardinka/royal/13.jpg',
  '/images/bus-tours/Cabardinka/royal/14.jpg',
  '/images/bus-tours/Cabardinka/royal/15.jpg',
  '/images/bus-tours/Cabardinka/royal/16.jpg',
].map((src, index) => ({
  src,
  alt: `Гостиница «Hotel Royal» — фото ${index + 1}`,
}));

const priceRows = [
  {
    date: '05.06 – 14.06',
    a1: 24500,
    a2: 16800,
    a3: 15300,
    r1: 29200,
    r2: 18800,
    r3: 16800,
    r4: 15900,
    extra: 15500,
  },
  {
    date: '12.06 – 21.06',
    a1: 29800,
    a2: 19300,
    a3: 16900,
    r1: 36500,
    r2: 22500,
    r3: 19200,
    r4: 18500,
    extra: 15500,
  },
  {
    date: '19.06 – 28.06',
    a1: 30300,
    a2: 19800,
    a3: 17400,
    r1: 37200,
    r2: 23200,
    r3: 19700,
    r4: 18900,
    extra: 15900,
  },
  {
    date: '26.06 – 05.07',
    a1: 36300,
    a2: 22600,
    a3: 19500,
    r1: 43200,
    r2: 26200,
    r3: 21700,
    r4: 20500,
    extra: 15900,
  },
  {
    date: '03.07 – 12.07',
    a1: 44300,
    a2: 26900,
    a3: 22200,
    r1: 51500,
    r2: 29900,
    r3: 24700,
    r4: 22700,
    extra: 16500,
  },
  {
    date: '10.07 – 19.07',
    a1: 44800,
    a2: 27300,
    a3: 23200,
    r1: 51900,
    r2: 30900,
    r3: 25300,
    r4: 23300,
    extra: 16500,
  },
  {
    date: '17.07 – 26.07',
    a1: 44800,
    a2: 27300,
    a3: 23200,
    r1: 51900,
    r2: 30900,
    r3: 25300,
    r4: 23300,
    extra: 16500,
  },
  {
    date: '24.07 – 02.08',
    a1: 44800,
    a2: 27300,
    a3: 23200,
    r1: 51900,
    r2: 30900,
    r3: 25300,
    r4: 23300,
    extra: 16500,
  },
  {
    date: '31.07 – 09.08',
    a1: 44800,
    a2: 27300,
    a3: 23200,
    r1: 51900,
    r2: 30900,
    r3: 25300,
    r4: 23300,
    extra: 16500,
  },
  {
    date: '07.08 – 16.08',
    a1: 44800,
    a2: 27300,
    a3: 23200,
    r1: 51900,
    r2: 30900,
    r3: 25300,
    r4: 23300,
    extra: 16500,
  },
  {
    date: '14.08 – 23.08',
    a1: 44800,
    a2: 27300,
    a3: 23200,
    r1: 51900,
    r2: 30900,
    r3: 25300,
    r4: 23300,
    extra: 16500,
  },
  {
    date: '21.08 – 30.08',
    a1: 44800,
    a2: 27300,
    a3: 23200,
    r1: 51900,
    r2: 30900,
    r3: 25300,
    r4: 23300,
    extra: 16500,
  },
  {
    date: '28.08 – 06.09',
    a1: 30300,
    a2: 19800,
    a3: 17400,
    r1: 37200,
    r2: 23500,
    r3: 19700,
    r4: 18900,
    extra: 15900,
  },
  {
    date: '04.09 – 13.09',
    a1: 30300,
    a2: 19800,
    a3: 17400,
    r1: 37200,
    r2: 23500,
    r3: 19700,
    r4: 18900,
    extra: 15900,
  },
  {
    date: '11.09 – 20.09',
    a1: 30300,
    a2: 19800,
    a3: 17400,
    r1: 37200,
    r2: 23500,
    r3: 19700,
    r4: 18900,
    extra: 15900,
  },
];

export default function HotelRoyal({
  onOpenAdvice,
}: {
  onOpenAdvice: () => void;
}) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'hotel-royal');
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

      <HotelGallery images={galleryImages} group="hotel-royal" />

      <h2 className="price-tour">
        Стоимость тура на 7 ночей за одного человека, в рублях
      </h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th rowSpan={2}>Дата заезда 2026 год</th>
              <th colSpan={3}>Корпус Арина</th>
              <th colSpan={4}>Корпус Hotel Royal</th>
              <th rowSpan={2}>доп. место</th>
            </tr>
            <tr>
              <th>одноместное размещение</th>
              <th>2-х местный</th>
              <th>3-х местный</th>
              <th>одноместное размещение</th>
              <th>2-х местный</th>
              <th>3-х местный</th>
              <th>4-х местный</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.a1}</td>
                <td>{row.a2}</td>
                <td>{row.a3}</td>
                <td>{row.r1}</td>
                <td>{row.r2}</td>
                <td>{row.r3}</td>
                <td>{row.r4}</td>
                <td>{row.extra}</td>
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
