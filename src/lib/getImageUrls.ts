import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { cache } from 'react';

export interface ImageType {
  name: string;
  url: string;
}

export const getImageUrls = cache(async (): Promise<ImageType[]> => {
  const folderRef = ref(storage, 'images');
  const res = await listAll(folderRef);
  return await Promise.all(
    res.items.map(async (item) => {
      const name = item.name.split('.').shift();
      return {
        name: name ? name : item.name,
        url: await getDownloadURL(item),
      };
    }),
  );
});
