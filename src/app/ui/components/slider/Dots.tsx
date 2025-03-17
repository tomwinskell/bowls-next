interface DotsProps {
  activeIndex: number;
  handleClick: (newIndex: number) => void;
  sliderImages: { url: string; alt: string; text: string }[];
}

export default function Dots({ activeIndex, handleClick, sliderImages }: DotsProps) {
  return (
    <div className="flex justify-center mt-3">
      {sliderImages.map((_slide, index) => (
        <span
          key={index}
          className={`cursor-pointer h-3 w-3 rounded-full mx-3 transition-colors duration-75 ${
            activeIndex === index ? 'bg-orange' : 'bg-navy hover:bg-orange'
          }`}
          onClick={() => handleClick(index)}
        ></span>
      ))}
    </div>
  );
}
