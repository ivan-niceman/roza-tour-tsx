import useScrollReveal from '../../hooks/useScrollReveal';
import HotelCard from '../HotelCard/HotelCard';
import { ALL_HOTELS } from '../../constants/hotels';

interface HotelItemProps {
  hotel: (typeof ALL_HOTELS)[number];
  onOpenAdvice: () => void;
  index: number; // для задержки анимации
}

export default function HotelItem({
  hotel,
  onOpenAdvice,
  index,
}: HotelItemProps) {
  const ref = useScrollReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className="bus-tours-hotel-item reveal"
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <HotelCard {...hotel} onOpenAdvice={onOpenAdvice} />
    </li>
  );
}
