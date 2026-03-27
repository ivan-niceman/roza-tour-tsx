import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Lermontovo/brillianite-II/1.jpg',
  '/images/bus-tours/Lermontovo/brillianite-II/2.jpg',
  '/images/bus-tours/Lermontovo/brillianite-II/3.jpg',
  '/images/bus-tours/Lermontovo/brillianite-II/4.jpg',
  '/images/bus-tours/Lermontovo/brillianite-II/5.jpg',
  '/images/bus-tours/Lermontovo/brillianite-II/6.jpg',
  '/images/bus-tours/Lermontovo/brillianite-II/7.jpg',
  '/images/bus-tours/Lermontovo/brillianite-II/8.jpg',
  '/images/bus-tours/Lermontovo/brillianite-II/10.jpg', // 9 пропущен
  '/images/bus-tours/Lermontovo/brillianite-II/11.jpg',
  '/images/bus-tours/Lermontovo/brillianite-II/12.jpg',
  '/images/bus-tours/Lermontovo/brillianite-II/13.jpg',
  '/images/bus-tours/Lermontovo/brillianite-II/14.jpg',
  '/images/bus-tours/Lermontovo/brillianite-II/15.jpg',
].map((src, index) => ({
  src,
  alt: `Гостевой дом «Бриллианит II» — фото ${index + 1}`,
}));

const priceRows = [
  {
    date: '08.06 – 17.06',
    single: 26200,
    double: 17800,
    triple: 16000,
    quad2: 18300,
    child: 12700,
  },
  {
    date: '15.06 – 24.06',
    single: 26200,
    double: 18300,
    triple: 17000,
    quad2: 18800,
    child: 12700,
  },
  {
    date: '22.06 – 01.07',
    single: 26700,
    double: 18300,
    triple: 17000,
    quad2: 18800,
    child: 12700,
  },
  {
    date: '29.06 – 08.07',
    single: 32500,
    double: 21300,
    triple: 19500,
    quad2: 21800,
    child: 12700,
  },
  {
    date: '06.07 – 15.07',
    single: 34200,
    double: 21300,
    triple: 19500,
    quad2: 21800,
    child: 12700,
  },
  {
    date: '13.07 – 22.07',
    single: 34700,
    double: 22300,
    triple: 20500,
    quad2: 22800,
    child: 12700,
  },
  {
    date: '20.07 – 29.07',
    single: 34700,
    double: 22300,
    triple: 20500,
    quad2: 22800,
    child: 12700,
  },
  {
    date: '27.07 – 05.08',
    single: 34700,
    double: 22300,
    triple: 20500,
    quad2: 22800,
    child: 12700,
  },
  {
    date: '03.08 – 12.08',
    single: 34700,
    double: 22300,
    triple: 20500,
    quad2: 22800,
    child: 12700,
  },
  {
    date: '10.08 – 19.08',
    single: 34700,
    double: 22300,
    triple: 20500,
    quad2: 22800,
    child: 12700,
  },
  {
    date: '17.08 – 26.08',
    single: 34700,
    double: 22300,
    triple: 20500,
    quad2: 22800,
    child: 12700,
  },
  {
    date: '24.08 – 02.09',
    single: 33700,
    double: 21300,
    triple: 19500,
    quad2: 21800,
    child: 12700,
  },
  {
    date: '31.08 – 09.09',
    single: 26700,
    double: 17800,
    triple: 16500,
    quad2: 18300,
    child: 12700,
  },
  {
    date: '07.09 – 16.09',
    single: 26700,
    double: 17800,
    triple: 16500,
    quad2: 18300,
    child: 12700,
  },
  {
    date: '14.09 – 23.09',
    single: 26700,
    double: 17800,
    triple: 16500,
    quad2: 18300,
    child: 12700,
  },
];

export default function Brillianite2({
  onOpenAdvice,
}: {
  onOpenAdvice: () => void;
}) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'brillianite-2');
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

      <HotelGallery images={galleryImages} group="brillianite-2" />

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
              <th>3-х, 4-х местное размещение</th>
              <th>4-х местный 2-х комнатный</th>
              <th>Доп. место для детей до 5-ти лет</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.single}</td>
                <td>{row.double}</td>
                <td>{row.triple}</td>
                <td>{row.quad2}</td>
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
