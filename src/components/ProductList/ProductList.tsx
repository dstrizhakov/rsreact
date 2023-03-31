import { FC, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { IProduct } from 'types/Types';

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = (props) => {
  const { products } = props;
  const productsElement = products.map((product) => (
    <Card
      key={product.id}
      id={product.id}
      image={product.image}
      title={product.title}
      text={product.text}
      price={product.price}
      likes={product.likes}
      created={product.created}
      isAvailable={product.isAvailable}
      isSale={product.isSale}
    />
  ));
  return <>{productsElement}</>;
};

export default ProductList;
