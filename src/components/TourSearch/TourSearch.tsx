import { useEffect } from 'react';

let tourvisorInitialized = false;

export default function TourSearch() {
  useEffect(() => {
    const scriptId = 'tourvisor-script';

    if (!tourvisorInitialized) {
      tourvisorInitialized = true;

      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = '//tourvisor.ru/module/init.js';
        script.async = true;
        document.body.appendChild(script);
      }
    } else {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
        tourvisorInitialized = false;

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = '//tourvisor.ru/module/init.js';
        script.async = true;
        document.body.appendChild(script);

        tourvisorInitialized = true;
      }
    }
  }, []);

  return (
    <div className="find-tour">
      <span className="background-image"></span>
      <div className="block-widget">
        <div className="block-title">
          <h1 className="widget-title">
            НАЙДИТЕ ТУР
            <br />
            СВОЕЙ МЕЧТЫ
          </h1>
          <img src="/images/arrow.svg" alt="иконка" />
        </div>
        <div className="widget">
          <div className="tv-search-form tv-moduleid-9964576"></div>
        </div>
      </div>
    </div>
  );
}
