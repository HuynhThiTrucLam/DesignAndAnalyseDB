import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./styles.css";
import slider1 from "../../assets/images/slider_1.webp";
import slider2 from "../../assets/images/slider_2.webp";
import slider3 from "../../assets/images/slider_3.webp";
import slider4 from "../../assets/images/slider_4.webp";
import NextIcon from "../../assets/images/icon/NextIcon";
import PrevIcon from "../../assets/images/icon/PrevIcon";
import Autoplay from "embla-carousel-autoplay";

export const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src={slider1} alt="slider1"></img>
          </div>
          <div className="embla__slide">
            <img src={slider2} alt="slider2"></img>
          </div>
          <div className="embla__slide">
            <img src={slider3} alt="slider3"></img>
          </div>
          <div className="embla__slide">
            <img src={slider4} alt="slider4"></img>
          </div>
        </div>
      </div>
      <div className="embla__icon">
        <div className="embla__next" onClick={scrollPrev}>
          <PrevIcon></PrevIcon>
        </div>
        <div className="embla__prev" onClick={scrollNext}>
          <NextIcon></NextIcon>
        </div>
      </div>
    </div>
  );
};
