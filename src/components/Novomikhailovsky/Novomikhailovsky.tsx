import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper.css';
import HotelCard from '../HotelCard/HotelCard';
import HotelItem from '../HotelItem/HotelItem';
import CityNav from '../CityNav/CityNav';
import { ALL_HOTELS, getCityData } from '../../constants/hotels';

const SliderNavigation = () => {
  const swiper = useSwiper();
  return (
    <div className="slider-navigation">
      <button className="slider-btn" onClick={() => swiper.slidePrev()}>
        Предыдущий
      </button>
      <button className="slider-btn" onClick={() => swiper.slideNext()}>
        Следующий
      </button>
    </div>
  );
};

export default function Novomikhailovsky({
  onOpenAdvice,
}: {
  onOpenAdvice: () => void;
}) {
  const hotels = ALL_HOTELS.filter((h) => h.city === 'novomikhailovsky');
  const city = getCityData('novomikhailovsky');
  const showNavigation = hotels.length > 1;

  return (
    <div className="hotel-container container">
      <h1 className="bus-tours-title">п. Новомихайловский</h1>

      {city && (
        <CityNav
          cityName={city.cityName}
          cityPath={city.cityPath}
          cityDescription={city.cityDescription}
        />
      )}

      <ul className="bus-tours-hotel-list grid-container">
        {hotels.map((hotel, index) => (
          <HotelItem
            key={hotel.id}
            hotel={hotel}
            onOpenAdvice={onOpenAdvice}
            index={index}
          />
        ))}
      </ul>

      <div className="slider-container">
        <Swiper
          modules={[Navigation]}
          navigation={showNavigation}
          loop={showNavigation}
          spaceBetween={20}
          slidesPerView={1}
        >
          {hotels.map((hotel) => (
            <SwiperSlide key={`swiper-${hotel.id}`}>
              <div className="bus-tours-hotel-item">
                <HotelCard {...hotel} onOpenAdvice={onOpenAdvice} />
              </div>
            </SwiperSlide>
          ))}
          {showNavigation && <SliderNavigation />}
        </Swiper>
      </div>
    </div>
  );
}
