import ProductList from '../../components/ProductList/ProductList';
import { useAppSelector } from '../../hooks/redux';
import { FC } from 'react';

const ProductListContainer: FC = () => {
  const storeProducts = useAppSelector((store) => store.productsReducer.products);
  return <ProductList products={storeProducts} />;
};

export default ProductListContainer;
