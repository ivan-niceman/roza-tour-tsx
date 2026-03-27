import HotelCard from '../HotelCard/HotelCard';
import HotelGallery from '../HotelGallery/HotelGallery';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const galleryImages = [
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_134934.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_134944.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135013.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135047.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135057.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135100.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135313.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135316.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135347.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135353.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135357.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135413.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135430.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135453.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135629.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135634.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_135638.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_140836.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_140843.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_140849.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_140900.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_140905.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_140913.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_140916.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_140922.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_140939.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_141007.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_141012.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_141015.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_141018.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_141105.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_141216.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_141219.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_141227.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_141232.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_141235.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_141245.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_142417.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_142427.webp',
  '/images/bus-tours/Gelendzhik/olina/IMG_20230917_142431.webp',
].map((src, index) => ({ src, alt: `Отель Олина — фото ${index + 1}` }));

const priceRows = [
  {
    date: '07.06 – 16.06',
    single: 22500,
    double: 15300,
    comfort: 17900,
    family: 15100,
    child: 9900,
  },
  {
    date: '14.06 – 23.06',
    single: 22700,
    double: 15400,
    comfort: 18400,
    family: 15300,
    child: 10400,
  },
  {
    date: '21.06 – 30.06',
    single: 26200,
    double: 17200,
    comfort: 21400,
    family: 16500,
    child: 10400,
  },
  {
    date: '28.06 – 07.07',
    single: 26200,
    double: 17500,
    comfort: 21700,
    family: 16800,
    child: 10400,
  },
  {
    date: '05.07 – 14.07',
    single: 26900,
    double: 18000,
    comfort: 22200,
    family: 17300,
    child: 10900,
  },
  {
    date: '12.07 – 21.07',
    single: 28600,
    double: 18800,
    comfort: 22600,
    family: 17700,
    child: 10900,
  },
  {
    date: '19.07 – 28.07',
    single: 29900,
    double: 19400,
    comfort: 22900,
    family: 18000,
    child: 10900,
  },
  {
    date: '26.07 – 04.08',
    single: 29900,
    double: 19400,
    comfort: 22900,
    family: 18000,
    child: 10900,
  },
  {
    date: '02.08 – 11.08',
    single: 29900,
    double: 19400,
    comfort: 22900,
    family: 18000,
    child: 10900,
  },
  {
    date: '09.08 – 18.08',
    single: 29900,
    double: 19400,
    comfort: 22900,
    family: 18000,
    child: 10900,
  },
  {
    date: '16.08 – 25.08',
    single: 29900,
    double: 19400,
    comfort: 22900,
    family: 18000,
    child: 10900,
  },
  {
    date: '23.08 – 01.09',
    single: 29900,
    double: 19400,
    comfort: 22900,
    family: 18000,
    child: 10900,
  },
  {
    date: '30.08 – 08.09',
    single: 23200,
    double: 15900,
    comfort: 18800,
    family: 15700,
    child: 10400,
  },
  {
    date: '06.09 – 15.09',
    single: 22800,
    double: 15600,
    comfort: 18200,
    family: 15400,
    child: 10400,
  },
  {
    date: '13.09 – 22.09',
    single: 22800,
    double: 15600,
    comfort: 18200,
    family: 15400,
    child: 10400,
  },
];

export default function Olina({ onOpenAdvice }: { onOpenAdvice: () => void }) {
  const hotel = ALL_HOTELS.find((h) => h.id === 'olina');
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

      <HotelGallery images={galleryImages} group="olina" />

      <h2 className="price-tour">
        Стоимость тура на 7 ночей за одного человека, в рублях
      </h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Дата&nbsp;заезда 2026 год</th>
              <th>Одноместное размещение</th>
              <th>2-х местное размещение</th>
              <th>2-х местный комфорт</th>
              <th>
                3-х местный семейный
                <br />
                (2-х комн. номер)
              </th>
              <th>
                Доп.место
                <br />
                для детей
                <br />
                до 10 лет
              </th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.single}</td>
                <td>{row.double}</td>
                <td>{row.comfort}</td>
                <td>{row.family}</td>
                <td>{row.child}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="tour-paragraph-info">
        <b>В стоимость тура входит:</b> проезд на новом комфортабельном
        автобусе, проживание, страховка на время пути, завтраки.
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
