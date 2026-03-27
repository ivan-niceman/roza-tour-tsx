import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function WorldTours() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//tourvisor.ru/module/init.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="world-tours container">
      <h1 className="world-tour-title">Туры по всему миру</h1>

      <span className="bus-tours-map">
        <Link to="/">Главная</Link> /{' '}
        <HashLink smooth to="/#services">
          Услуги
        </HashLink>{' '}
        / <p>Туры по всему миру</p>
      </span>

      <div className="world-tours-widget">
        <div className="tv-search-form tv-moduleid-9964576"></div>
      </div>
    </div>
  );
}
