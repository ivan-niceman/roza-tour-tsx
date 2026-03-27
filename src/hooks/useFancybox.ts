import { useState, useEffect } from 'react';
import { type FancyboxOptions, Fancybox } from '@fancyapps/ui/dist/fancybox/';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import '@fancyapps/ui/dist/carousel/carousel.css';
import '@fancyapps/ui/dist/carousel/carousel.arrows.css';

export default function useFancybox(options: Partial<FancyboxOptions> = {}) {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (root) {
      Fancybox.bind(root, '[data-fancybox]');
      return () => Fancybox.unbind(root);
    }
  }, [root, options]);

  return [setRoot];
}

// import { useRef, useState, useCallback, useEffect } from 'react';

// import {
//   type CarouselOptions,
//   type CarouselInstance,
//   Carousel,
// } from '@fancyapps/ui/dist/carousel/';
// import '@fancyapps/ui/dist/carousel/carousel.css';

// import { canUseDOM } from '@fancyapps/ui/dist/utils/canUseDOM.js';
// import { isEqual } from '@fancyapps/ui/dist/utils/isEqual.js';

// export type CarouselContainerRefType = <ContainerElement extends HTMLElement>(
//   el: ContainerElement | null,
// ) => void;

// export type useCarousel = [
//   CarouselContainerRefType,
//   CarouselInstance | undefined,
// ];

// export default function useCarousel(
//   options: Partial<CarouselOptions> = {},
// ): useCarousel {
//   const storedOptions = useRef(options);

//   const [container, setContainer] = useState<HTMLElement | null>(null);
//   const [carouselInstance, setCarouselInstance] = useState<
//     CarouselInstance | undefined
//   >(undefined);

//   const reInit = useCallback(() => {
//     if (carouselInstance) {
//       carouselInstance.destroy().init();
//     }
//   }, [carouselInstance]);

//   useEffect(() => {
//     if (!isEqual(options, storedOptions.current)) {
//       storedOptions.current = options;
//       reInit();
//     }
//   }, [options, reInit]);

//   useEffect(() => {
//     if (canUseDOM() && container) {
//       const newCarouselInstance = Carousel(
//         container,
//         storedOptions.current,
//       ).init();

//       setCarouselInstance(newCarouselInstance);

//       return () => {
//         newCarouselInstance.destroy();
//       };
//     } else {
//       setCarouselInstance(undefined);
//     }
//   }, [container]);

//   return [setContainer, carouselInstance];
// }
