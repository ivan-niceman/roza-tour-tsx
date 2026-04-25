import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Gelendzhik/kiulait/1.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/2.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/3.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/4.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/5.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/6.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/7.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/8.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/10.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/11.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/12.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/13.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/14.jpg',
  '/images/bus-tours/Gelendzhik/kiulait/15.jpg',
].map((src, index) => ({ src, alt: `Отель КЬЮЛАЙТ — фото ${index + 1}` }));

const priceRows = [
  {
    date: '05.06 – 14.06',
    single: 36900,
    double: 22500,
    triple: 20200,
    quad: 19200,
    child: 12500,
  },
  {
    date: '12.06 – 21.06',
    single: 38900,
    double: 23800,
    triple: 21200,
    quad: 20200,
    child: 12500,
  },
  {
    date: '19.06 – 28.06',
    single: 40500,
    double: 24900,
    triple: 22200,
    quad: 24600,
    child: 12500,
  },
  {
    date: '26.06 – 05.07',
    single: 43800,
    double: 26500,
    triple: 23200,
    quad: 25800,
    child: 14500,
  },
  {
    date: '03.07 – 12.07',
    single: 48800,
    double: 28800,
    triple: 24900,
    quad: 23600,
    child: 16500,
  },
  {
    date: '10.07 – 19.07',
    single: 50900,
    double: 30500,
    triple: 26200,
    quad: 24600,
    child: 16500,
  },
  {
    date: '17.07 – 26.07',
    single: 55900,
    double: 32900,
    triple: 27900,
    quad: 25900,
    child: 16500,
  },
  {
    date: '24.07 – 02.08',
    single: 55900,
    double: 32900,
    triple: 27900,
    quad: 25900,
    child: 16500,
  },
  {
    date: '31.07 – 09.08',
    single: 55900,
    double: 32900,
    triple: 27900,
    quad: 25900,
    child: 16500,
  },
  {
    date: '07.08 – 16.08',
    single: 55900,
    double: 32900,
    triple: 27900,
    quad: 25900,
    child: 16500,
  },
  {
    date: '14.08 – 23.08',
    single: 55900,
    double: 32900,
    triple: 27900,
    quad: 25900,
    child: 16500,
  },
  {
    date: '21.08 – 30.08',
    single: 48900,
    double: 29500,
    triple: 25500,
    quad: 22800,
    child: 16500,
  },
  {
    date: '28.08 – 06.09',
    single: 41900,
    double: 25800,
    triple: 23200,
    quad: 21400,
    child: 14500,
  },
  {
    date: '04.09 – 13.09',
    single: 38400,
    double: 24200,
    triple: 21900,
    quad: 20600,
    child: 12500,
  },
  {
    date: '11.09 – 20.09',
    single: 36400,
    double: 23200,
    triple: 20900,
    quad: 19600,
    child: 12500,
  },
];

export default function Kiulait({
  onOpenAdvice,
}: {
  onOpenAdvice: () => void;
}) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'kiulait');
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

      <HotelGallery images={galleryImages} group="kiulait" />

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
              <th>4-х местное размещение (2-х комн. номер)</th>
              <th>Доп.место для детей до 5 лет</th>
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
      <p className="tour-paragraph-info">
        <b>Заезд/выезд:</b> Заселение с 14:00, выезд до 12:00.
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
