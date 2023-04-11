import { FC } from 'react';
import Card from '../Card/Card';
import { IProduct } from 'types/Types';
import styles from './ProductList.module.scss';

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
      big={product.big}
      title={product.title}
      text={product.text}
      price={product.price}
      likes={product.likes}
      created={product.created}
      isAvailable={product.isAvailable}
      isSale={product.isSale}
    />
  ));
  return <div className={styles.cards}>{productsElement}</div>;
};

export default ProductList;
