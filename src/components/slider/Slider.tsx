'use client'
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';
import { sliderImages } from './sliderImages';
import { useState } from 'react';

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = sliderImages.length - 1;

  return (
    <div className="relative">
      <SliderContent activeIndex={activeIndex} sliderImages={sliderImages} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? lastIndex : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === lastIndex ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImages={sliderImages}
        handleClick={(newIndex) => setActiveIndex(newIndex)}
      />
    </div>
  );
}
