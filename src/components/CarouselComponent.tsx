'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ImageType } from '@/lib/getImageUrls';
import Image from 'next/image';
import { Badge } from './ui/badge';

const CarouselComponent = ({ images }: { images: ImageType[] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  console.log(images);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="w-full aspect-[3/2] overflow-hidden rounded-lg relative">
              <Image
                src={image.url}
                alt={image.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <Badge
                variant="secondary"
                className="absolute bottom-2 left-1/2 -translate-x-1/2"
              >
                {image.name}
              </Badge>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;
