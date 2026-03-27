import useFancybox from '../../hooks/useFancybox';
import useCarousel from '../../hooks/useCarousel';
import { Arrows } from '@fancyapps/ui/dist/carousel/carousel.arrows.js';
import { Thumbs } from '@fancyapps/ui/dist/carousel/carousel.thumbs.js';
import '@fancyapps/ui/dist/carousel/carousel.arrows.css';
import '@fancyapps/ui/dist/carousel/carousel.thumbs.css';

type ImageType = {
  src: string;
  alt?: string;
};

type Props = {
  images: ImageType[];
  group: string;
};

export default function HotelGallery({ images, group }: Props) {
  const [carouselRef] = useCarousel(
    {
      infinite: true,
      Thumbs: {
        type: 'classic',
      },
    },
    { Arrows, Thumbs }, // ← плагины третьим аргументом
  );

  const [fancyboxRef] = useFancybox({
    loop: true,
    Thumbs: { type: 'classic' },
    Toolbar: {
      display: {
        left: ['infobar'], // счётчик фото
        middle: [],
        right: ['slideshow', 'thumbs', 'close'], // кнопки управления
      },
    },
  } as any);

  return (
    <div ref={fancyboxRef}>
      <div className="f-carousel" ref={carouselRef}>
        {images.map((img, i) => (
          <div
            className="f-carousel__slide fancybox-big"
            key={i}
            data-thumb-src={img.src}
          >
            <a
              href={img.src}
              data-fancybox={group}
              data-src={img.src}
              data-caption={img.alt}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
