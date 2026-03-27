import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Lermontovo/brillianite-I/1.jpg',
  '/images/bus-tours/Lermontovo/brillianite-I/2.jpg',
  '/images/bus-tours/Lermontovo/brillianite-I/3.jpg',
  '/images/bus-tours/Lermontovo/brillianite-I/4.jpg',
  '/images/bus-tours/Lermontovo/brillianite-I/5.jpg',
  '/images/bus-tours/Lermontovo/brillianite-I/6.jpg',
  '/images/bus-tours/Lermontovo/brillianite-I/7.jpg',
  '/images/bus-tours/Lermontovo/brillianite-I/8.jpg',
  '/images/bus-tours/Lermontovo/brillianite-I/10.jpg', // 9 пропущен
].map((src, index) => ({
  src,
  alt: `Гостевой дом «Бриллианит I» — фото ${index + 1}`,
}));

const priceRows = [
  {
    date: '08.06 – 17.06',
    s_fan: 21300,
    s_ac: 23900,
    m_fan: 15300,
    d_ac: 16800,
    t_ac: 16000,
  },
  {
    date: '15.06 – 24.06',
    s_fan: 21700,
    s_ac: 24500,
    m_fan: 15800,
    d_ac: 17800,
    t_ac: 16500,
  },
  {
    date: '22.06 – 01.07',
    s_fan: 21700,
    s_ac: 24500,
    m_fan: 15800,
    d_ac: 17800,
    t_ac: 16500,
  },
  {
    date: '29.06 – 08.07',
    s_fan: 26500,
    s_ac: 31400,
    m_fan: 17700,
    d_ac: 20800,
    t_ac: 19500,
  },
  {
    date: '06.07 – 15.07',
    s_fan: 26800,
    s_ac: 31900,
    m_fan: 17700,
    d_ac: 20800,
    t_ac: 19500,
  },
  {
    date: '13.07 – 22.07',
    s_fan: 27800,
    s_ac: 32600,
    m_fan: 18700,
    d_ac: 21300,
    t_ac: 20500,
  },
  {
    date: '20.07 – 29.07',
    s_fan: 27800,
    s_ac: 32600,
    m_fan: 18700,
    d_ac: 21300,
    t_ac: 20500,
  },
  {
    date: '27.07 – 05.08',
    s_fan: 27800,
    s_ac: 32600,
    m_fan: 18700,
    d_ac: 21300,
    t_ac: 20500,
  },
  {
    date: '03.08 – 12.08',
    s_fan: 27800,
    s_ac: 32600,
    m_fan: 18700,
    d_ac: 21300,
    t_ac: 20500,
  },
  {
    date: '10.08 – 19.08',
    s_fan: 27800,
    s_ac: 32600,
    m_fan: 18700,
    d_ac: 21300,
    t_ac: 20500,
  },
  {
    date: '17.08 – 26.08',
    s_fan: 27800,
    s_ac: 32600,
    m_fan: 18700,
    d_ac: 21300,
    t_ac: 20500,
  },
  {
    date: '24.08 – 02.09',
    s_fan: 26900,
    s_ac: 31900,
    m_fan: 17700,
    d_ac: 20300,
    t_ac: 19500,
  },
  {
    date: '31.08 – 09.09',
    s_fan: 26500,
    s_ac: 24500,
    m_fan: 15300,
    d_ac: 16800,
    t_ac: 16000,
  },
  {
    date: '07.09 – 16.09',
    s_fan: 26500,
    s_ac: 24500,
    m_fan: 15300,
    d_ac: 16800,
    t_ac: 16000,
  },
  {
    date: '14.09 – 23.09',
    s_fan: 26500,
    s_ac: 24500,
    m_fan: 15300,
    d_ac: 16800,
    t_ac: 16000,
  },
];

export default function Brillianite1({
  onOpenAdvice,
}: {
  onOpenAdvice: () => void;
}) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'brillianite-1');
  const city = getCityData('lermontovo');
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

      <HotelGallery images={galleryImages} group="brillianite-1" />

      <h2 className="price-tour">
        Стоимость тура на 7 ночей за одного человека, в рублях
      </h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th rowSpan={2}>Дата заезда 2026 год</th>
              <th colSpan={2}>Одноместное размещение</th>
              <th rowSpan={2}>
                2-х, 3-х местное размещение
                <br />
                Номер с вентилятором
              </th>
              <th>2-х местное размещение</th>
              <th>3-х местное размещение</th>
            </tr>
            <tr>
              <th>С вентилятором</th>
              <th>С кондиционером</th>
              <th colSpan={2}>Номер с кондиционером</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.s_fan}</td>
                <td>{row.s_ac}</td>
                <td>{row.m_fan}</td>
                <td>{row.d_ac}</td>
                <td>{row.t_ac}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="tour-paragraph-info">
        <b>Дети до 5-ти лет</b> на дополнительном месте <b>10 600 руб.</b> (при
        проживании с двумя и более взрослыми).
      </p>
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
