import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [counts, setCounts] = useState({
    years: 0,
    destinations: 0,
    tourists: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1000;
    const frames = 60; // 60 кадров анимации
    const frameDuration = duration / frames;

    let currentFrame = 0;
    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / frames;

      setCounts({
        years: Math.floor(24 * progress),
        destinations: Math.floor(47 * progress),
        tourists: Math.floor(10000 * progress),
      });

      if (currentFrame === frames) clearInterval(timer);
    }, frameDuration);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <div className="about container">
      <h2 className="title">О НАС</h2>
      <div className="about-info">
        <span className="description">
          <p className="about-paragraph">
            Мир удивителен и прекрасен. Наша задача - показать его Вам!
            <br />
            Мы имеем договора с ведущими туристическими операторами России и
            готовы предложить своим клиентам туры по всем открытым для туризма
            направлениям.
            <br />
            <br />
            Патриотично настроенным туристам мы предлагаем экскурсионные туры по
            России.
            <br />
            <br />
            Так же мы являемся туроператором по внутреннему туризму и нашим
            основным направлением в этой сфере являются автобусные туры в
            Краснодарский край.
          </p>
        </span>
        <img src="./images/about-image.webp" alt="девушка с картой" />
      </div>
      <div className="about-numbers" ref={sectionRef}>
        <span>
          <span className="about-number">{counts.years}</span>
          <p className="about-number-description">года работы</p>
        </span>
        <span>
          <span className="about-number">{counts.destinations}</span>
          <p className="about-number-description">направлений отдыха</p>
        </span>
        <span>
          <span className="about-number">{counts.tourists}+</span>
          <p className="about-number-description">довольных туриста</p>
        </span>
      </div>
    </div>
  );
}
