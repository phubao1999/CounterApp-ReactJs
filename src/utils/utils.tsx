import ReactDOM from "react-dom";

export default class Utils {
    static getDOMNode(element: Element) {
        return ReactDOM.findDOMNode(element);
    }
}