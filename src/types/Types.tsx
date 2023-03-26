export interface IProduct {
  id: number | null;
  image: string;
  title: string;
  text: string;
  price: number;
  likes?: number;
}

export interface IProductForm extends IProduct {
  created: number | string;
  isAvailable: boolean;
  isSale: boolean;
}
