import { IForm, IProduct } from 'types/Types';

export function isValidDate(date: string) {
  const createdDate = new Date(date);
  const currentDate = Date.parse(String(new Date()));
  if (currentDate > Date.parse(String(createdDate))) {
    return true;
  }
  return false;
}

export function convertFormProductToProduct(formProduct: IForm): IProduct {
  const product = {
    id: Date.now().toString(),
    image: URL.createObjectURL(formProduct.file![0]),
    big: URL.createObjectURL(formProduct.file![0]),
    type: formProduct.type,
    title: formProduct.title,
    text: formProduct.text,
    price: formProduct.price,
    likes: 0,
    created: formProduct.created,
    isAvailable: formProduct.isAvailable,
    isSale: formProduct.isSale,
  };
  return product;
}
