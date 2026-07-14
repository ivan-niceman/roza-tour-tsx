import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Divnomorskoye/kiparis/1.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/2.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/3.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/4.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/5.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/6.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/7.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/8.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/9.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/10.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/11.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/12.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/13.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/14.webp',
  '/images/bus-tours/Divnomorskoye/kiparis/15.webp',
].map((src, index) => ({
  src,
  alt: `отель «Кипарис» — фото ${index + 1}`,
}));

const priceRows = [
  {
    date: '24.07 – 02.08',
    singleBalcony: 48500,
    stdTwinBalcony: 29300,
    stdDoubleNoBalcony: 31200,
    comfortDoubleBalcony: 33300,
    stdTripleBalcony: 29300,
    stdQuadNoBalcony: 25500,
  },
  {
    date: '31.07 – 09.08',
    singleBalcony: 48500,
    stdTwinBalcony: 29300,
    stdDoubleNoBalcony: 31200,
    comfortDoubleBalcony: 33300,
    stdTripleBalcony: 29300,
    stdQuadNoBalcony: 25500,
  },
  {
    date: '07.08 – 16.08',
    singleBalcony: 48500,
    stdTwinBalcony: 29300,
    stdDoubleNoBalcony: 31200,
    comfortDoubleBalcony: 33300,
    stdTripleBalcony: 29300,
    stdQuadNoBalcony: 25500,
  },
  {
    date: '14.08 – 23.08',
    singleBalcony: 48500,
    stdTwinBalcony: 29300,
    stdDoubleNoBalcony: 31200,
    comfortDoubleBalcony: 33300,
    stdTripleBalcony: 29300,
    stdQuadNoBalcony: 25500,
  },
  {
    date: '21.08 – 30.08',
    singleBalcony: 48500,
    stdTwinBalcony: 29300,
    stdDoubleNoBalcony: 28500,
    comfortDoubleBalcony: 33300,
    stdTripleBalcony: 25800,
    stdQuadNoBalcony: 22200,
  },
  {
    date: '28.08 – 06.09',
    singleBalcony: 38500,
    stdTwinBalcony: 24300,
    stdDoubleNoBalcony: 25800,
    comfortDoubleBalcony: 27900,
    stdTripleBalcony: 23200,
    stdQuadNoBalcony: 20200,
  },
  {
    date: '04.09 – 13.09',
    singleBalcony: 36900,
    stdTwinBalcony: 23300,
    stdDoubleNoBalcony: 24900,
    comfortDoubleBalcony: 26900,
    stdTripleBalcony: 22500,
    stdQuadNoBalcony: 20200,
  },
  {
    date: '11.09 – 20.09',
    singleBalcony: 36900,
    stdTwinBalcony: 23300,
    stdDoubleNoBalcony: 24900,
    comfortDoubleBalcony: 26900,
    stdTripleBalcony: 22500,
    stdQuadNoBalcony: 20200,
  },
];

export default function Kiparis({
  onOpenAdvice,
}: {
  onOpenAdvice: () => void;
}) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'kiparis');
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

      <HotelGallery images={galleryImages} group="kiparis" />

      <h2 className="price-tour">
        Стоимость тура на 7 ночей за одного человека, в рублях
      </h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Дата заезда 2026 год</th>
              <th>Одноместное размещение номер с балконом</th>
              <th>Стандарт 2-х местный с раздельными кроватями с балконом</th>
              <th>Стандарт 2-х местный без балкона</th>
              <th>Комфорт 2-х местный с балконом</th>
              <th>Стандарт 3-х местный с балконом</th>
              <th>Стандарт 4-х местный без балкона</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.singleBalcony}</td>
                <td>{row.stdTwinBalcony}</td>
                <td>{row.stdDoubleNoBalcony}</td>
                <td>{row.comfortDoubleBalcony}</td>
                <td>{row.stdTripleBalcony}</td>
                <td>{row.stdQuadNoBalcony}</td>
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
