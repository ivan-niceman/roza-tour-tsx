import { Link } from 'react-router-dom';

interface ServiceItem {
  title: string;
  link: string;
  image: string;
  alt: string;
}

const servicesData: ServiceItem[] = [
  {
    title: 'Автобусом к морю в Краснодарский край',
    link: '/bus-tours',
    image: '/images/services/services-1.webp',
    alt: 'автобус',
  },
  {
    title: 'Туры по всему миру',
    link: '/world-tours',
    image: '/images/services/services-2.webp',
    alt: 'замок',
  },
  {
    title: 'Туры для организованных групп и школьников',
    link: '/group-tours',
    image: '/images/services/services-3.webp',
    alt: 'дети',
  },
  {
    title: 'Санаторно-курортное лечение',
    link: '/spa-treatment',
    image: '/images/services/services-4.webp',
    alt: 'лечение',
  },
];

export default function Services() {
  return (
    <div className="services container">
      <h2 id="services" className="title">
        УСЛУГИ
      </h2>
      <ul className="services-list">
        {servicesData.map((service, index) => (
          <li key={index}>
            <Link className="services-link" to={service.link}>
              <img
                className="services-img"
                src={service.image}
                alt={service.alt}
              />
              <p className="services-paragraph">{service.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
