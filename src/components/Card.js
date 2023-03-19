import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import styles from './Card.module.scss';
import like from '../assets/heart-icon.svg';
class Card extends Component {
    state = { likes: this.props.likes || 0 };
    increment = () => {
        this.setState({ likes: this.state.likes + 1 });
    };
    render() {
        return (_jsx("div", { className: styles.card, children: _jsxs("div", { className: styles.body, children: [_jsx("div", { className: styles.image, children: _jsx("img", { src: `../../public/${this.props.image}`, alt: "image" }) }), _jsxs("div", { className: styles.content, children: [_jsx("h2", { children: this.props.title }), _jsx("p", { children: this.props.text })] }), _jsxs("div", { className: styles.actions, children: [_jsxs("span", { role: "like", onClick: this.increment, children: [_jsx("img", { src: like, alt: "like" }), this.state.likes] }), _jsxs("h3", { children: [this.props.price, "USD"] })] })] }) }));
    }
}
export default Card;
