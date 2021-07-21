// import Counter from "./counter";

import { Component } from "react";
import Counter from "../Counter/counter";
interface countersProps {
    onRevert: Function,
    onReset: Function,
    onDelete: Function,
    onIncrement: Function,
    counters: Object[];
}
class Counters extends Component<countersProps> {

    render() {
        return (
            <div data-testid="1">
                <button onClick={() => { this.props.onRevert() }} className="btn btn-success btn-sm m2">Revert Data</button>
                <button onClick={() => { this.props.onReset() }} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map((counter: any) =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={() => this.props.onDelete(counter.id)}
                        onIncrement={() => this.props.onIncrement(counter)}
                    />
                )}
            </div>
        )
    }
}

export default Counters;