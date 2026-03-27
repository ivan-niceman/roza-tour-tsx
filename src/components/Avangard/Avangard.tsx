import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Divnomorskoye/avangard/1.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/2.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/3.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/4.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/5.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/6.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/7.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/8.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/9.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/10.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/11.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/12.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/13.jpg',
  '/images/bus-tours/Divnomorskoye/avangard/14.jpg',
].map((src, index) => ({
  src,
  alt: `гостевой дом «АВАНГАРД» — фото ${index + 1}`,
}));

const priceRows = [
  {
    date: '05.06 – 14.06',
    col1: 22500,
    col2: 15500,
    col3: 17500,
    col4: 14500,
    col5: 13900,
    col6: 13400,
  },
  {
    date: '12.06 – 21.06',
    col1: 24500,
    col2: 16500,
    col3: 18900,
    col4: 15800,
    col5: 14500,
    col6: 13400,
  },
  {
    date: '19.06 – 28.06',
    col1: 26500,
    col2: 17900,
    col3: 19800,
    col4: 16300,
    col5: 15500,
    col6: 13900,
  },
  {
    date: '26.06 – 05.07',
    col1: 29500,
    col2: 19500,
    col3: 21900,
    col4: 16800,
    col5: 16500,
    col6: 13900,
  },
  {
    date: '03.07 – 12.07',
    col1: 33500,
    col2: 21500,
    col3: 24900,
    col4: 17500,
    col5: 16800,
    col6: 13900,
  },
  {
    date: '10.07 – 19.07',
    col1: 34500,
    col2: 22200,
    col3: 25900,
    col4: 18500,
    col5: 17500,
    col6: 14900,
  },
  {
    date: '17.07 – 26.07',
    col1: 34500,
    col2: 22200,
    col3: 25900,
    col4: 18500,
    col5: 18900,
    col6: 14900,
  },
  {
    date: '24.07 – 02.08',
    col1: 34500,
    col2: 22200,
    col3: 25900,
    col4: 18500,
    col5: 18900,
    col6: 14900,
  },
  {
    date: '31.07 – 09.08',
    col1: 38200,
    col2: 24200,
    col3: 27800,
    col4: 19500,
    col5: 20500,
    col6: 14900,
  },
  {
    date: '07.08 – 16.08',
    col1: 38200,
    col2: 24200,
    col3: 27800,
    col4: 19500,
    col5: 20500,
    col6: 14900,
  },
  {
    date: '14.08 – 23.08',
    col1: 38200,
    col2: 24200,
    col3: 27800,
    col4: 19500,
    col5: 20500,
    col6: 14900,
  },
  {
    date: '21.08 – 30.08',
    col1: 38200,
    col2: 24200,
    col3: 27800,
    col4: 19500,
    col5: 20500,
    col6: 14900,
  },
  {
    date: '28.08 – 06.09',
    col1: 28500,
    col2: 20500,
    col3: 22500,
    col4: 16300,
    col5: 17500,
    col6: 13900,
  },
  {
    date: '04.09 – 13.09',
    col1: 26500,
    col2: 17900,
    col3: 19800,
    col4: 15200,
    col5: 15500,
    col6: 13900,
  },
  {
    date: '11.09 – 20.09',
    col1: 26500,
    col2: 17900,
    col3: 19800,
    col4: 15200,
    col5: 15500,
    col6: 13900,
  },
];

export default function Avangard({
  onOpenAdvice,
}: {
  onOpenAdvice: () => void;
}) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'avangard');
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

      <HotelGallery images={galleryImages} group="avangard" />

      <h2 className="price-tour">
        Стоимость тура на 7 ночей за одного человека, в рублях
      </h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Дата заезда 2026 год</th>
              <th>Одноместное размещение номер без балкона</th>
              <th>2-х местное размещение номер без балкона</th>
              <th>2-х местное размещение номер с балконом</th>
              <th>3-х местное размещение номер без балкона</th>
              <th>4-х местное размещение номер с балконом</th>
              <th>Доп. место до 12 лет</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.col1}</td>
                <td>{row.col2}</td>
                <td>{row.col3}</td>
                <td>{row.col4}</td>
                <td>{row.col5}</td>
                <td>{row.col6}</td>
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
