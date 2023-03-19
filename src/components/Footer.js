import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import styles from './Footer.module.scss';
class Footer extends Component {
    render() {
        return (_jsx("footer", { className: styles.footer, children: _jsx("div", { className: styles.container, children: _jsxs("div", { className: styles.body, children: [_jsx("h4", { children: "Copyright 2023" }), _jsx("h4", { children: "RSSCHOOL 2023" })] }) }) }));
    }
}
export default Footer;
