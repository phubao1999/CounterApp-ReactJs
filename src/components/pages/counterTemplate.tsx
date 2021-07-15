import { Component } from "react";
import Counters from "../counters";
import HandleStore from "../handleStore";

const dataCounter = [
    { id: 1, value: 3 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
];

interface counter {
    id: number,
    value: number
}

interface counterState {
    counters: counter[]
}

class CounterTemplate extends Component<any, counterState> {
    constructor(props: any) {
        super(props);
        this.state = {
            counters: dataCounter
        }
    }

    componentDidMount() {
        console.log("NgOnInit");
    }

    handleDelete = (id: number) => {
        const newData = this.state.counters.filter(item => item.id !== id);
        this.setState({
            counters: newData
        })
    }

    handleIncrement = (counter: any) => {
        const cloneCounters = [...this.state.counters];
        const index = cloneCounters.indexOf(counter);
        cloneCounters[index] = { ...counter };
        cloneCounters[index].value++;
        this.setState({
            counters: cloneCounters
        })
    }

    handleResetData = () => {
        const resetData = this.state.counters.map(item => {
            item.value = 0;
            return item;
        })
        this.setState({
            counters: resetData
        })
    }

    handleRevertData = () => {
        this.setState({
            counters: dataCounter
        });
    }

    render() {
        return (
            <>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onReset={this.handleResetData}
                        onRevert={this.handleRevertData} />
                    <HandleStore />
                </main>
            </>
        );
    }
}

export default CounterTemplate;