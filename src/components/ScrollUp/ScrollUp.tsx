import { useState, useEffect } from 'react';

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Оптимизация: меняем стейт только если состояние действительно изменилось
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);

    // Очистка при размонтировании компонента (обязательно!)
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []); // <--- ВОТ ЭТОТ МАССИВ СДЕЛАЕТ КОД ПРАВИЛЬНЫМ

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Ваша верстка отличная, её можно оставить как есть
  return isVisible ? (
    <button
      className="scroll-up"
      onClick={scrollToTop}
    >
      <span></span>
      <span></span>
    </button>
  ) : null;
}
