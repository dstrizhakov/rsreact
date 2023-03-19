import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import styles from './Search.module.scss';
class Search extends Component {
    constructor() {
        super({});
        this.state = { query: '' };
    }
    saveToLocalStotage = () => {
        localStorage.setItem('Query', this.state.query);
    };
    getFromLocalStorage = () => {
        this.setState({ query: localStorage.getItem('Query') || '' });
    };
    componentDidMount() {
        this.getFromLocalStorage();
    }
    componentWillUnmount() {
        this.saveToLocalStotage();
    }
    onChange = (event) => {
        this.setState({ query: event.target.value });
    };
    render() {
        return (_jsx("div", { className: styles.body, children: _jsxs("form", { onSubmit: (event) => event.preventDefault(), className: styles.form, children: [_jsxs("div", { className: styles.search, children: [_jsx("input", { role: "search", type: "text", placeholder: "Search query...", onChange: this.onChange, value: this.state.query }), _jsx("span", { children: "Error. Search query should be not empty." })] }), _jsx("button", { children: "Search" })] }) }));
    }
}
export default Search;
