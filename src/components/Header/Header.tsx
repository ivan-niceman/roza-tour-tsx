import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';
import { navigation } from '../../constants/navigation';
import MobileNavigationList from '../MobileNavigationList/MobileNavigationList';

interface HeaderProps {
  onOpenAdvice: () => void; // Добавляем определение типа пропса
}

export default function Header({ onOpenAdvice }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Если меню открыто и клик был НЕ по меню, и НЕ по кнопке бургера
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('.burger-button')
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-container container">
        <button
          type="button"
          className="burger-button"
          onClick={toggleMenu}
          aria-label="Открыть меню"
        ></button>

        {/* Мобильная навигация */}
        <nav
          ref={menuRef}
          className={`mobile-nav ${isMenuOpen ? 'mobile-nav_active' : ''}`}
        >
          <span className="block-close-button">
            <button
              type="button"
              className="mobile-close-button"
              onClick={closeMenu}
            ></button>
          </span>
          <MobileNavigationList
            onClose={closeMenu}
            onOpenAdvice={onOpenAdvice}
          />
        </nav>

        <div className="header-info">
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

          <span className="header-logo-content">
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
        </div>
      </div>

      {/* Основная навигация (Десктоп) */}
      <nav className="header-nav container">
        <ul className="navigation-list">
          <li>
            <button
              className="navigation-link banner-button-advice"
              onClick={onOpenAdvice} // Вызываем функцию из пропсов при клике
            >
              Подобрать тур
            </button>
          </li>
          {navigation.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                name={link.name}
                className="navigation-link"
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
