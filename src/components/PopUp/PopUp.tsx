import { useState, useEffect, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

interface BasePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
}

export default function BasePopup({ isOpen, onClose, title }: BasePopupProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsOpening(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsOpening(false);
      setError('');
      setSuccess(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpening(false);
    setTimeout(onClose, 300);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/send.php', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setTimeout(handleClose, 5000); // закрываем через 5 сек после успеха
      } else {
        setError('Ошибка отправки. Попробуйте позже.');
      }
    } catch {
      setError('Не удалось отправить. Проверьте соединение.');
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen && !isOpening) return null;

  return (
    <div
      className={`popup-form ${isOpening ? 'popup_opened' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="popup-content-form" onClick={(e) => e.stopPropagation()}>
        <div className="popup-form-block">
          <button
            aria-label="закрыть"
            type="button"
            className="popup__form-button-close"
            onClick={handleClose}
          ></button>

          {success ? (
            <div className="popup-success">
              <svg
                viewBox="0 0 52 52"
                style={{
                  width: '60px',
                  height: '60px',
                  marginBottom: '16px',
                }}
              >
                <circle
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  style={{
                    strokeDasharray: '166',
                    strokeDashoffset: '166',
                    animation: 'drawCircle 0.4s ease forwards',
                  }}
                />
                <path
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 27 l8 8 l16 -16"
                  style={{
                    strokeDasharray: '48',
                    strokeDashoffset: '48',
                    animation: 'drawCheck 0.3s ease 0.4s forwards',
                  }}
                />
              </svg>
              <p className="popup-success__title">Заявка отправлена!</p>
              <p className="popup-success__subtitle">
                Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <>
              <h2 className="header__form-title">{title}</h2>

              <form className="form-content" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Имя"
                  required
                />
                <input
                  type="text"
                  name="tel"
                  className="form-input"
                  placeholder="Телефон"
                  pattern="[0-9\+]*"
                  minLength={10}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Электронная почта (не обязательно)"
                />
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Сообщение"
                  minLength={7}
                  required
                ></textarea>

                {error && (
                  <p style={{ color: 'red', fontSize: '14px', margin: '0' }}>
                    {error}
                  </p>
                )}

                <div className="form-submit">
                  <button
                    type="submit"
                    className="form-btn"
                    disabled={isSending}
                  >
                    {isSending ? 'Отправка...' : 'Отправить'}
                  </button>
                  <p className="form-privacy-paragraph">
                    Отправляя сообщение вы соглашаетесь на&nbsp;
                    <Link
                      to="/privacy"
                      className="form-privacy-link"
                      onClick={onClose}
                    >
                      обработку персональных данных
                    </Link>
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
