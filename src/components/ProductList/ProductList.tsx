import { Component, ReactNode } from 'react';
import Card from '../Card/Card';
import { IProduct } from 'types/Types';

interface ProductListProps {
  products: IProduct[];
}

class ProductList extends Component<ProductListProps> {
  render(): ReactNode {
    return this.props.products.map((product) => (
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
  }
}

export default ProductList;
