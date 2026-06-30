import { Link } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';
import { navigation } from '../../constants/navigation';

interface FooterProps {
  onOpenAdvice: () => void; // Добавляем определение типа пропса
}

export default function Footer({ onOpenAdvice }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-info header-info">
          <span className="header-contacts">
            <a className="header-phone" href="tel:+74722207940">
              +7 (4722) 20-79-40
            </a>
            <br />
            <a className="header-phone" href="tel:+79040830500">
              +7 (904) 083-05-00
            </a>
            <br />
            <a className="header-mail" href="mailto:roza-tur31@rambler.ru">
              roza-tur31@rambler.ru
            </a>
          </span>
          <span className="footer-logo-content">
            <Link to="/" className="logo"></Link>
            <p className="header-logo-paragraph">
              Единый федеральный реестр туроператоров по внутреннему туризму №
              РТО 004497
            </p>
          </span>
          <span className="address">
            <address className="address-info">
              г. Белгород, Гражданский проспект 4, офис 8
            </address>
            <div className="work-time">
              <p className="address-work-time">Будние дни с 10:00 до 19:00</p>
              <p className="address-work-time">Суббота с 10:00 до 16:00</p>
              <p className="address-work-time">Воскресенье выходной</p>
            </div>
          </span>
          <nav className="footer-nav nav">
            <ul className="footer-navigation-list navigation-list">
              <li>
                <button
                  className="footer-navigation-link"
                  onClick={onOpenAdvice}
                >
                  Подобрать тур
                </button>
              </li>
              {navigation.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    name={link.name}
                    className="footer-navigation-link"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <span className="footer-privacy">
        <Link to="/privacy">Положение об обработке персональных данных</Link>
        Информация на сайте не является публичной офертой и носит исключительно
        информационный характер.
        <br />
        ИНН 3123212307 ОГРН 1103123005061
      </span>
      <a href="https://nice-dev.ru/" className="nice-dev" target="_blank">
        © Nice Dev Web-Studio 2020 - {new Date().getFullYear()}
      </a>
    </footer>
  );
}
