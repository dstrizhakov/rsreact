import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from 'react';
class NotFound extends Component {
    render() {
        return (_jsx("div", { children: _jsx("h1", { children: "404 Page not found" }) }));
    }
}
export default NotFound;
