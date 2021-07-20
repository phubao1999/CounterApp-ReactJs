import ReactDOM from "react-dom";

export function getDOMNode(element: Element) {
    return ReactDOM.findDOMNode(element);
}