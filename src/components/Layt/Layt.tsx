import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Divnomorskoye/layt/1.webp',
  '/images/bus-tours/Divnomorskoye/layt/2.webp',
  '/images/bus-tours/Divnomorskoye/layt/3.webp',
  '/images/bus-tours/Divnomorskoye/layt/4.webp',
  '/images/bus-tours/Divnomorskoye/layt/5.webp',
  '/images/bus-tours/Divnomorskoye/layt/6.webp',
  '/images/bus-tours/Divnomorskoye/layt/7.webp',
  '/images/bus-tours/Divnomorskoye/layt/8.webp',
  '/images/bus-tours/Divnomorskoye/layt/9.webp',
  '/images/bus-tours/Divnomorskoye/layt/10.webp',
].map((src, index) => ({
  src,
  alt: `гостиница «ЛАЙТ» — фото ${index + 1}`,
}));

const priceRows = [
  {
    date: '05.06 – 14.06',
    single: 31900,
    dbl: 20500,
    f3b: 17900,
    f3: 16500,
    extra: 13400,
  },
  {
    date: '12.06 – 21.06',
    single: 37900,
    dbl: 23500,
    f3b: 19900,
    f3: 18800,
    extra: 13400,
  },
  {
    date: '19.06 – 28.06',
    single: 38500,
    dbl: 23900,
    f3b: 20900,
    f3: 19200,
    extra: 13900,
  },
  {
    date: '26.06 – 05.07',
    single: 43500,
    dbl: 26500,
    f3b: 22900,
    f3: 21200,
    extra: 13900,
  },
  {
    date: '03.07 – 12.07',
    single: 49800,
    dbl: 29800,
    f3b: 25600,
    f3: 23600,
    extra: 13900,
  },
  {
    date: '10.07 – 19.07',
    single: 50800,
    dbl: 30500,
    f3b: 26500,
    f3: 24800,
    extra: 14900,
  },
  {
    date: '17.07 – 26.07',
    single: 50800,
    dbl: 30500,
    f3b: 26500,
    f3: 24800,
    extra: 14900,
  },
  {
    date: '24.07 – 02.08',
    single: 50800,
    dbl: 30500,
    f3b: 26500,
    f3: 24800,
    extra: 14900,
  },
  {
    date: '31.07 – 09.08',
    single: 50800,
    dbl: 30500,
    f3b: 26500,
    f3: 24800,
    extra: 14900,
  },
  {
    date: '07.08 – 16.08',
    single: 50800,
    dbl: 30500,
    f3b: 26500,
    f3: 24800,
    extra: 14900,
  },
  {
    date: '14.08 – 23.08',
    single: 50800,
    dbl: 30500,
    f3b: 26500,
    f3: 24800,
    extra: 14900,
  },
  {
    date: '21.08 – 30.08',
    single: 47500,
    dbl: 28800,
    f3b: 24500,
    f3: 22200,
    extra: 14900,
  },
  {
    date: '28.08 – 06.09',
    single: 41900,
    dbl: 25500,
    f3b: 21500,
    f3: 20200,
    extra: 13900,
  },
  {
    date: '04.09 – 13.09',
    single: 41900,
    dbl: 25500,
    f3b: 21500,
    f3: 20200,
    extra: 13900,
  },
  {
    date: '11.09 – 20.09',
    single: 40500,
    dbl: 24700,
    f3b: 21500,
    f3: 20200,
    extra: 13900,
  },
];

export default function Layt({ onOpenAdvice }: { onOpenAdvice: () => void }) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'layt');
  const city = getCityData('divnomorskoye');
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

      <HotelGallery images={galleryImages} group="layt" />

      <h2 className="price-tour">
        Стоимость тура на 7 ночей за одного человека, в рублях
      </h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Дата заезда 2026 год</th>
              <th>Одноместное размещение номер с балконом</th>
              <th>2-х местное размещение номер с балконом</th>
              <th>3-х местное размещение номер c балконом</th>
              <th>3-х местное размещение номер без балкона</th>
              <th>Доп. место до 12 лет</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.single}</td>
                <td>{row.dbl}</td>
                <td>{row.f3b}</td>
                <td>{row.f3}</td>
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
