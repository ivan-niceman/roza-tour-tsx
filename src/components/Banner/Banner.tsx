interface BannerProps {
  onOpenTour: () => void; // Функция для открытия модалки консультации
}

export default function Banner({ onOpenTour }: BannerProps) {
  return (
    <div className="banner">
      <div className="banner-container container">
        <div className="banner-info">
          <h2 className="banner-title">
            туры по&nbsp;акциям
            <br />
            со скидкой до 30%
          </h2>
          <button className="banner-button" onClick={onOpenTour}>
            Показать
          </button>
        </div>
        <img src="./images/girl-banner.webp" alt="девушка" />
        <p>Image by benzoix on Freepik</p>
      </div>
    </div>
  );
}
