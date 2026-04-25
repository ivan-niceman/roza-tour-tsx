import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Dzhubga/leodimas/1.jpg',
  '/images/bus-tours/Dzhubga/leodimas/2.jpg',
  '/images/bus-tours/Dzhubga/leodimas/3.jpg',
  '/images/bus-tours/Dzhubga/leodimas/4.jpg',
  '/images/bus-tours/Dzhubga/leodimas/5.jpg',
  '/images/bus-tours/Dzhubga/leodimas/6.jpg',
  '/images/bus-tours/Dzhubga/leodimas/7.jpg',
  '/images/bus-tours/Dzhubga/leodimas/8.jpg',
  '/images/bus-tours/Dzhubga/leodimas/9.jpg',
  '/images/bus-tours/Dzhubga/leodimas/10.jpg',
  '/images/bus-tours/Dzhubga/leodimas/11.jpg',
  '/images/bus-tours/Dzhubga/leodimas/12.jpg',
].map((src, index) => ({
  src,
  alt: `Гостевой дом «ЛеоДимас» — фото ${index + 1}`,
}));

const priceRows = [
  {
    date: '08.06 – 17.06',
    double: 20900,
    triple: 17900,
    quad: 16400,
    child: 13400,
  },
  {
    date: '15.06 – 24.06',
    double: 21600,
    triple: 18500,
    quad: 16900,
    child: 13400,
  },
  {
    date: '22.06 – 01.07',
    double: 21600,
    triple: 18500,
    quad: 16900,
    child: 13400,
  },
  {
    date: '29.06 – 08.07',
    double: 26400,
    triple: 22300,
    quad: 20900,
    child: 13400,
  },
  {
    date: '06.07 – 15.07',
    double: 26400,
    triple: 22300,
    quad: 20900,
    child: 13400,
  },
  {
    date: '13.07 – 22.07',
    double: 26900,
    triple: 23300,
    quad: 21900,
    child: 13400,
  },
  {
    date: '20.07 – 29.07',
    double: 26900,
    triple: 23300,
    quad: 21900,
    child: 13400,
  },
  {
    date: '27.07 – 05.08',
    double: 26900,
    triple: 23300,
    quad: 21900,
    child: 13400,
  },
  {
    date: '03.08 – 12.08',
    double: 26900,
    triple: 23300,
    quad: 21900,
    child: 13400,
  },
  {
    date: '10.08 – 19.08',
    double: 26900,
    triple: 23300,
    quad: 21900,
    child: 13400,
  },
  {
    date: '17.08 – 26.08',
    double: 26900,
    triple: 23300,
    quad: 21900,
    child: 13400,
  },
  {
    date: '24.08 – 02.09',
    double: 26400,
    triple: 22300,
    quad: 20900,
    child: 13400,
  },
  {
    date: '31.08 – 09.09',
    double: 21600,
    triple: 18500,
    quad: 16900,
    child: 13400,
  },
  {
    date: '07.09 – 16.09',
    double: 21600,
    triple: 18500,
    quad: 16900,
    child: 13400,
  },
  {
    date: '14.09 – 23.09',
    double: 21600,
    triple: 18500,
    quad: 16900,
    child: 13400,
  },
];

export default function Leodimas({
  onOpenAdvice,
}: {
  onOpenAdvice: () => void;
}) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'leodimas');
  const city = getCityData('dzhubga');
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

      <HotelGallery images={galleryImages} group="leodimas" />

      <h2 className="price-tour">
        Стоимость тура на 7 ночей за одного человека, в рублях
      </h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Дата заезда 2026 год</th>
              <th>2-х местное размещение</th>
              <th>3-х местное размещение</th>
              <th>4-х местное размещение</th>
              <th>Дети до 5-ти лет без места</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
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
