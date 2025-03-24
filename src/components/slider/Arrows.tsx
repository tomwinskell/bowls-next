interface ArrowsProps {
  prevSlide: () => void;
  nextSlide: () => void;
}

export default function Arrows({ prevSlide, nextSlide }: ArrowsProps) {
  return (
    <div>
      <div
        className="absolute top-[40%] md:top-[40%] left-6 z-10 cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-blue text-winter text-[20px] transition-colors duration-75 hover:bg-orange hover:text-blue"
        onClick={prevSlide}
      >
        <span className="ml-[2px]">&#10094;</span>
      </div>
      <div
        className="absolute top-[40%] md:top-[40%] right-6 z-10 cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-blue text-winter text-[20px] transition-colors duration-75 hover:bg-orange hover:text-blue"
        onClick={nextSlide}
      >
        <span className="ml-[5px]">&#10095;</span>
      </div>
    </div>
  );
}
