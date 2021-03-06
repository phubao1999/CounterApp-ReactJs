import { Component } from "react";
export interface counterProps {
    onIncrement: Function,
    onDelete: Function,
    counter: {
        id: number,
        value: number
    }
}
export default class Counter extends Component<counterProps> {
    constructor(props: counterProps) {
        super(props);
        this.getClassesBadge = this.getClassesBadge.bind(this);
        this.formatValue = this.formatValue.bind(this);
    }

    componentWillUnmount() {
        console.log("Component On Destroy");
    }

    getClassesBadge() {
        return `badge m-2 ${this.props.counter.value === 0 ? " badge-warning" : " badge-primary"}`;
    }

    formatValue() {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    }

    render() {
        return (
            <div data-testid={this.props.counter.id}>
                <span className={this.getClassesBadge()}>{this.formatValue()}</span>
                <button className="btn btn-secondary btn-sm" onClick={() => { this.props.onIncrement() }}>Increment</button>
                <button className="btn btn-danger btn-sm ml-2" onClick={() => { this.props.onDelete() }}>Delete</button>
            </div>
        )
    }
}