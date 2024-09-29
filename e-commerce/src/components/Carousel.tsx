// components/Carousel.js
"use client";

import React, { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Carousel = () => {
  const autoplayRef = useRef(Autoplay({ delay: 4000 }));
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplayRef.current]);

  return (
    <div className="flex flex-col items-center justify-center min-h-96">
      <div className="embla w-3/4 h-3/4" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img
              src="https://www.static-src.com/siva/asset/09_2024/desktop-car9-lego-sep25.jpg"
              className="w-full"
              alt="Image 1"
            />
          </div>
          <div className="embla__slide">
            <img
              src="https://www.static-src.com/siva/asset/09_2024/desktop-car1-paydayrotd-sep25.jpg"
              className="w-full"
              alt="Image 2"
            />
          </div>
          <div className="embla__slide">
            <img
              src="https://www.static-src.com/siva/asset/09_2024/desktop-car6-nba-sep25.jpg"
              className="w-full"
              alt="Image 3"
            />
          </div>
          <div className="embla__slide">
            <img
              src="https://www.static-src.com/siva/asset/09_2024/desktop-car3-puma-sep25.jpg"
              className="w-full"
              alt="Image 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
