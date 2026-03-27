interface ContactBannerProps {
  onOpenAdvice: () => void; // Функция для открытия модалки консультации
}

export default function ContactBanner({ onOpenAdvice }: ContactBannerProps) {
  return (
    <div className="banner-2">
      <div className="container">
        <h2 className="banner-2-title">Хотите пообщаться о турах?</h2>
        <p className="banner-2-paragraph">Мы тоже хотим!</p>
        <button
          type="button"
          className="banner-2-button banner-button-advice"
          onClick={onOpenAdvice}
        >
          Написать
        </button>
      </div>
    </div>
  );
}
