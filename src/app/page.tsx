import CarouselComponent from '@/components/CarouselComponent';
import { Homepage } from '@/components/Homepage';
import { getImageUrls } from '@/lib/getImageUrls';

export default async function Home() {
  const images = await getImageUrls();
  return (
    <div className="flex flex-col gap-6">
      <Homepage />
      <CarouselComponent images={images} />
    </div>
  );
}
