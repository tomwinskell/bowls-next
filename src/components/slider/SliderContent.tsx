import '@fontsource-variable/noto-sans';
import Image from 'next/image';

interface SliderContentProps {
  activeIndex: number;
  sliderImages: { url: string; alt: string; text: string }[];
}

export default function SliderContent({
  activeIndex,
  sliderImages,
}: SliderContentProps) {
  return (
    <>
      {sliderImages.map((slide, index) => (
        <div
          key={index}
          className={`h-[40vh] w-full relative flex flex-col justify-end ${
            activeIndex === index ? 'flex' : 'hidden'
          }`}
        >
          <Image
            className="absolute w-full h-full object-cover"
            src={slide.url}
            alt={slide.alt}
            width={1080}
            height={500}
          />
          <p className="z-10 self-center m-10 rounded-4xl text-navy bg-winter-transparent font-semibold text-center p-4 text-balance">
            {slide.text}
          </p>
        </div>
      ))}
    </>
  );
}
