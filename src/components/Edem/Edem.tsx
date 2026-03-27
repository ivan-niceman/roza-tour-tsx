import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Cabardinka/edem/1.jpg',
  '/images/bus-tours/Cabardinka/edem/2.jpg',
  '/images/bus-tours/Cabardinka/edem/3.jpg',
  '/images/bus-tours/Cabardinka/edem/4.jpg',
  '/images/bus-tours/Cabardinka/edem/5.jpg',
  '/images/bus-tours/Cabardinka/edem/6.jpg',
  '/images/bus-tours/Cabardinka/edem/7.jpg',
  '/images/bus-tours/Cabardinka/edem/8.jpg',
  '/images/bus-tours/Cabardinka/edem/9.jpg',
  '/images/bus-tours/Cabardinka/edem/10.jpg',
  '/images/bus-tours/Cabardinka/edem/11.jpg',
  '/images/bus-tours/Cabardinka/edem/12.jpg',
  '/images/bus-tours/Cabardinka/edem/13.jpg',
  '/images/bus-tours/Cabardinka/edem/15.jpg',
  '/images/bus-tours/Cabardinka/edem/16.jpg',
  '/images/bus-tours/Cabardinka/edem/17.jpg',
  '/images/bus-tours/Cabardinka/edem/18.jpg',
  '/images/bus-tours/Cabardinka/edem/19.jpg',
  '/images/bus-tours/Cabardinka/edem/20.jpg',
  '/images/bus-tours/Cabardinka/edem/22.jpg',
  '/images/bus-tours/Cabardinka/edem/23.jpg',
  '/images/bus-tours/Cabardinka/edem/24.jpg',
  '/images/bus-tours/Cabardinka/edem/25.jpg',
  '/images/bus-tours/Cabardinka/edem/26.jpg',
  '/images/bus-tours/Cabardinka/edem/27.jpg',
  '/images/bus-tours/Cabardinka/edem/28.jpg',
].map((src, index) => ({
  src,
  alt: `Гостевой дом «Эдем» — фото ${index + 1}`,
}));

const priceRows = [
  {
    date: '13.06 – 22.06',
    m1: 35800,
    m2: 21800,
    f2b: 23800,
    f3: 21200,
    f3b: 21200,
    f4: 18700,
    f4b: 18700,
    extra: 11500,
  },
  {
    date: '20.06 – 29.06',
    m1: 35800,
    m2: 21800,
    f2b: 23800,
    f3: 21200,
    f3b: 21200,
    f4: 18700,
    f4b: 18700,
    extra: 11500,
  },
  {
    date: '27.06 – 06.07',
    m1: 40500,
    m2: 24300,
    f2b: 27800,
    f3: 23300,
    f3b: 23900,
    f4: 21200,
    f4b: 21700,
    extra: 11500,
  },
  {
    date: '04.07 – 13.07',
    m1: 43500,
    m2: 26300,
    f2b: 31300,
    f3: 24900,
    f3b: 26300,
    f4: 22600,
    f4b: 23500,
    extra: 11500,
  },
  {
    date: '11.07 – 20.07',
    m1: 43500,
    m2: 26300,
    f2b: 31300,
    f3: 24900,
    f3b: 26300,
    f4: 22600,
    f4b: 23500,
    extra: 11500,
  },
  {
    date: '18.07 – 27.07',
    m1: 43500,
    m2: 26300,
    f2b: 31300,
    f3: 24900,
    f3b: 26300,
    f4: 22600,
    f4b: 23500,
    extra: 11500,
  },
  {
    date: '25.07 – 03.08',
    m1: 43500,
    m2: 26300,
    f2b: 31300,
    f3: 24900,
    f3b: 26300,
    f4: 22600,
    f4b: 23500,
    extra: 11500,
  },
  {
    date: '01.08 – 10.08',
    m1: 43500,
    m2: 26300,
    f2b: 31300,
    f3: 24900,
    f3b: 26300,
    f4: 22600,
    f4b: 23500,
    extra: 11500,
  },
  {
    date: '08.08 – 17.08',
    m1: 43500,
    m2: 26300,
    f2b: 31300,
    f3: 24900,
    f3b: 26300,
    f4: 22600,
    f4b: 23500,
    extra: 11500,
  },
  {
    date: '15.08 – 24.08',
    m1: 43500,
    m2: 26300,
    f2b: 31300,
    f3: 24900,
    f3b: 26300,
    f4: 22600,
    f4b: 23500,
    extra: 11500,
  },
  {
    date: '22.08 – 31.08',
    m1: 43500,
    m2: 26300,
    f2b: 31300,
    f3: 24900,
    f3b: 26300,
    f4: 22600,
    f4b: 23500,
    extra: 11500,
  },
  {
    date: '29.08 – 07.09',
    m1: 38200,
    m2: 23500,
    f2b: 25900,
    f3: 21900,
    f3b: 22200,
    f4: 19800,
    f4b: 19800,
    extra: 11500,
  },
  {
    date: '05.09 – 14.09',
    m1: 36200,
    m2: 22500,
    f2b: 23800,
    f3: 21200,
    f3b: 21200,
    f4: 18800,
    f4b: 18800,
    extra: 11500,
  },
  {
    date: '12.09 – 21.09',
    m1: 32200,
    m2: 20500,
    f2b: 22800,
    f3: 20200,
    f3b: 20200,
    f4: 17800,
    f4b: 17800,
    extra: 11500,
  },
];

export default function Edem({ onOpenAdvice }: { onOpenAdvice: () => void }) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'edem');
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

      <HotelGallery images={galleryImages} group="edem" />

      <h2 className="price-tour">
        Стоимость тура на 7 ночей за одного человека, в рублях
      </h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th rowSpan={3}>Дата заезда 2025 год</th>
              <th colSpan={2}>Мансарда</th>
              <th colSpan={5}>2, 3 этаж</th>
              <th rowSpan={3}>Доп. место</th>
            </tr>
            <tr>
              <th rowSpan={2}>Одноместное</th>
              <th rowSpan={2}>2-х местный</th>
              <th rowSpan={2}>2-х местный с балконом</th>
              <th colSpan={2}>3-х местный</th>
              <th colSpan={2}>4-х местный</th>
            </tr>
            <tr>
              <th>без балкона</th>
              <th>с балконом</th>
              <th>без балкона</th>
              <th>с балконом</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.m1}</td>
                <td>{row.m2}</td>
                <td>{row.f2b}</td>
                <td>{row.f3}</td>
                <td>{row.f3b}</td>
                <td>{row.f4}</td>
                <td>{row.f4b}</td>
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
      <p className="tour-paragraph-info">
        <b>Дети до 3-х лет</b> с двумя взрослыми могут размещаться{' '}
        <b>без спального места</b>. Оплачивается только проезд <b>7 500 руб.</b>
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
