import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from 'react';
import Card from '../components/Card';
class ProductList extends Component {
    render() {
        return this.props.products.map((product) => (_jsx(Card, { id: product.id, image: product.image, title: product.title, text: product.text, price: product.price, likes: product.likes }, product.id)));
    }
}
export default ProductList;
