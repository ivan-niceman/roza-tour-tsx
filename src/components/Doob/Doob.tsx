import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Cabardinka/doob/1.webp',
  '/images/bus-tours/Cabardinka/doob/2.webp',
  '/images/bus-tours/Cabardinka/doob/3.webp',
  '/images/bus-tours/Cabardinka/doob/4.webp',
  '/images/bus-tours/Cabardinka/doob/5.webp',
  '/images/bus-tours/Cabardinka/doob/6.webp',
  '/images/bus-tours/Cabardinka/doob/7.webp',
  '/images/bus-tours/Cabardinka/doob/8.webp',
  '/images/bus-tours/Cabardinka/doob/9.webp',
  '/images/bus-tours/Cabardinka/doob/10.webp',
  '/images/bus-tours/Cabardinka/doob/11.webp',
  '/images/bus-tours/Cabardinka/doob/12.webp',
  '/images/bus-tours/Cabardinka/doob/13.webp',
  '/images/bus-tours/Cabardinka/doob/14.webp',
  '/images/bus-tours/Cabardinka/doob/15.webp',
].map((src, index) => ({
  src,
  alt: `Гостевой дом «ДООБ» — фото ${index + 1}`,
}));

const priceRows = [
  {
    date: '05.06 – 14.06',
    s_fan: 18300,
    s_ac: 21300,
    m_fan: 13400,
    m_ac: 14800,
  },
  {
    date: '12.06 – 21.06',
    s_fan: 18300,
    s_ac: 21300,
    m_fan: 13400,
    m_ac: 14800,
  },
  {
    date: '19.06 – 28.06',
    s_fan: 18800,
    s_ac: 21800,
    m_fan: 13900,
    m_ac: 15500,
  },
  {
    date: '26.06 – 05.07',
    s_fan: 18800,
    s_ac: 22800,
    m_fan: 13900,
    m_ac: 15900,
  },
  {
    date: '03.07 – 12.07',
    s_fan: 19300,
    s_ac: 24500,
    m_fan: 14400,
    m_ac: 16900,
  },
  {
    date: '10.07 – 19.07',
    s_fan: 19800,
    s_ac: 25200,
    m_fan: 14900,
    m_ac: 17900,
  },
  {
    date: '17.07 – 26.07',
    s_fan: 20800,
    s_ac: 26900,
    m_fan: 15600,
    m_ac: 18600,
  },
  {
    date: '24.07 – 02.08',
    s_fan: 21200,
    s_ac: 26900,
    m_fan: 15600,
    m_ac: 18600,
  },
  {
    date: '31.07 – 09.08',
    s_fan: 21200,
    s_ac: 26900,
    m_fan: 15600,
    m_ac: 18600,
  },
  {
    date: '07.08 – 16.08',
    s_fan: 21200,
    s_ac: 26900,
    m_fan: 15600,
    m_ac: 18600,
  },
  {
    date: '14.08 – 23.08',
    s_fan: 21200,
    s_ac: 26900,
    m_fan: 15600,
    m_ac: 18600,
  },
  {
    date: '21.08 – 30.08',
    s_fan: 21200,
    s_ac: 26900,
    m_fan: 15600,
    m_ac: 18600,
  },
  {
    date: '28.08 – 06.09',
    s_fan: 18800,
    s_ac: 21800,
    m_fan: 13900,
    m_ac: 15500,
  },
  {
    date: '04.09 – 13.09',
    s_fan: 18800,
    s_ac: 21800,
    m_fan: 13900,
    m_ac: 15500,
  },
  {
    date: '11.09 – 20.09',
    s_fan: 18800,
    s_ac: 21800,
    m_fan: 13900,
    m_ac: 15500,
  },
];

export default function Doob({ onOpenAdvice }: { onOpenAdvice: () => void }) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'doob');
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

      <HotelGallery images={galleryImages} group="doob" />

      <h2 className="price-tour">
        Стоимость тура на 7 ночей за одного человека, в рублях
      </h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th rowSpan={2}>Дата заезда 2026 год</th>
              <th colSpan={2}>Одноместное размещение</th>
              <th colSpan={2}>2-х, 3-х, 4-х местное размещение</th>
            </tr>
            <tr>
              <th>Номер с вентилятором</th>
              <th>Номер с кондиционером</th>
              <th>Номер с вентилятором</th>
              <th>Номер с кондиционером</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.s_fan}</td>
                <td>{row.s_ac}</td>
                <td>{row.m_fan}</td>
                <td>{row.m_ac}</td>
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
