import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
class Layout extends Component {
    render() {
        return (_jsxs("div", { className: "wrapper", children: [_jsx(Header, {}), _jsx("main", { className: "main", children: _jsx("div", { className: "container", children: _jsx(Outlet, {}) }) }), _jsx(Footer, {})] }));
    }
}
export default Layout;
