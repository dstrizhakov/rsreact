import { IUnsplash } from 'types/Unsplash';

const UNSPLASH_ACCESS_KEY = 'GQpboVLxSu8scxvDv9g3SOJtb4cEg3q9t5ekYwiivas';
const orientation = 'landscape';
const limit = 24;

async function getUnsplashPhotos(query: string): Promise<IUnsplash[]> {
  const url = `https://api.unsplash.com/photos/random?orientation=${orientation}&query=${query}&count=${limit}&client_id=${UNSPLASH_ACCESS_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getUnsplashPhoto(id: string): Promise<IUnsplash> {
  const response = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=${UNSPLASH_ACCESS_KEY}`
  );
  const data = await response.json();
  return data;
}

export { getUnsplashPhotos, getUnsplashPhoto };
