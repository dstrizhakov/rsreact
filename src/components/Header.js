import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../assets/react.svg';
class Header extends Component {
    render() {
        return (_jsx(_Fragment, { children: _jsx("header", { className: styles.header, children: _jsx("div", { className: styles.container, children: _jsxs("div", { className: styles.body, children: [_jsx("div", { className: styles.logo, children: _jsxs(Link, { to: '/', children: [_jsx("img", { src: logo, height: "20px", alt: "logo" }), _jsx("h4", { children: "RS REACT" })] }) }), _jsxs("nav", { className: styles.nav, children: [_jsx(NavLink, { to: '/', children: "Home" }), _jsx(NavLink, { to: '/about', children: "About" })] })] }) }) }) }));
    }
}
export default Header;
