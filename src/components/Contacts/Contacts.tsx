import { Link } from 'react-router-dom';
export default function Contacts() {
  return (
    <div className="contacts container">
      <h1 className="contacts-title">
        Туристическое агентство и туроператор по внутреннему туризму «Роза-Тур»
      </h1>
      <p>
        <b>Мы находимся по адресу: </b>{' '}
        <a
          href="https://yandex.ru/maps/org/roza_tur/1176964284/?l=stv%2Csta&ll=36.602141%2C50.593303&mode=search&panorama%5Bdirection%5D=355.323165%2C4.279052&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=36.602554%2C50.593253&panorama%5Bspan%5D=120.096961%2C60.000000&sll=36.598200%2C50.600500&sspn=0.156415%2C0.105907&text=www.rozatour.ru&z=17"
          target="_blank"
        >
          город Белгород, Гражданский проспект 4, 2 этаж, офис 8.
        </a>
      </p>
      <p>
        <b>Телефоны для связи: </b>{' '}
        <a href="tel:+74722207940">+7 (4722) 20-79-40</a>,
        <a href="tel:+79040830500">+7-904-083-05-00</a>
      </p>
      <p>
        <b>Электронная почта (e-mail): </b>{' '}
        <a href="mailto:roza-tur31@rambler.ru">roza-tur31@rambler.ru</a>
      </p>
      <br />
      <p>
        <b>График работы</b>
      </p>
      <p>
        Друзья, обращаем Ваше внимание на изменение графика работы офиса:
        <br />
        до 27 февраля работаем в офисе только по предварительной записи.
        <br />
        со 2 марта в будние дни с 10 до 18.
      </p>
      <br />
      <p>
        <b>Контакты организации</b>
      </p>
      <Link to="/">ООО «Роза-Тур»</Link>
      <p>
        308000, Россия, Белгородская область, город Белгород, Гражданский
        проспект дом 4, офис 8
      </p>
      <br />
      <p>
        Телефоны: <a href="tel:+74722207940">+7 (4722) 20-79-40</a>,{' '}
        <a href="tel:+79040830500">+7-904-083-05-00</a>
      </p>
      <p>
        <b>Электронная почта:</b>{' '}
        <a href="mailto:roza-tur31@rambler.ru">roza-tur31@rambler.ru</a>
      </p>
      <p>
        Мы работаем: понедельник - пятница 10:00 - 18:00, суббота по
        предварительной записи, воскресенье выходной.
      </p>
      <br />
      <ul className="office-gallery">
        <li>
          <img src="./images/about/office-1.webp" alt="офис" />
        </li>
        <li>
          <img src="./images/about/office-2.webp" alt="офис" />
        </li>
        <li>
          <img src="./images/about/office-3.webp" alt="офис" />
        </li>
        <li>
          <img src="./images/about/office-4.webp" alt="офис" />
        </li>
      </ul>
      <h3 className="contacts-organization">Карта проезда</h3>
      <br />
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c6847693576ccdacc8c12674f8f047f30acd8fc9ddf9c1f543b6b572a45c1bd&amp;source=constructor"
        width="100%"
        height="300"
        style={{ border: 'none' }}
        title="Карта проезда"
      ></iframe>
    </div>
  );
}
