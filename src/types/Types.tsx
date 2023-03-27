export interface IProduct {
  id: string;
  image: string;
  title: string;
  text: string;
  price: string;
  likes?: number;
  created?: number | string;
  isAvailable?: boolean;
  isSale?: boolean;
}

// export interface IProductForm extends IProduct {
//   created: number | string;
//   isAvailable: boolean;
//   isSale: boolean;
// }
