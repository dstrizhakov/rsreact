import { IProduct } from 'types/Types';
import { IUnsplash } from 'types/Unsplash';

export function convertUpsplashToProducts(unsplash: IUnsplash[]): IProduct[] {
  const products = unsplash.map((item: IUnsplash) => {
    return {
      id: item.id,
      image: item.urls.small,
      big: item.urls.regular,
      type: 'image',
      title: item.user.name,
      text: (item.description && item.description.slice(0, 30)) || 'no description',
      price: '3.5',
      likes: item.likes,
      created: item.created_at,
      isAvailable: true,
      isSale: false,
    };
  });
  return products;
}
