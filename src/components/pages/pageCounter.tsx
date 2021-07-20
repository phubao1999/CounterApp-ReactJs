import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { updateNavbarCount } from "../../actions";
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

interface counterProps {
    updateNavbarCount: any
}

class PageCounter extends Component<counterProps, counterState> {
    constructor(props: counterProps) {
        super(props);
        this.state = {
            counters: dataCounter
        }
        this.props.updateNavbarCount(this.totalProduct);
    }

    get totalProduct() {
        return this.state.counters.filter(item => item.value > 0).length;
    }

    updateStateNavbarCountProduct() {
        setTimeout(() => {
            this.props.updateNavbarCount(this.totalProduct);
        })
    }

    componentDidMount() {
        this.updateStateNavbarCountProduct();
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _page: 1,
                _limit: 10
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    handleDelete = (id: number) => {
        const newData = this.state.counters.filter(item => item.id !== id);
        this.setState({
            counters: newData
        })
        this.updateStateNavbarCountProduct();
    }

    handleIncrement = (counter: any) => {
        const cloneCounters = [...this.state.counters];
        const index = cloneCounters.indexOf(counter);
        cloneCounters[index] = { ...counter };
        cloneCounters[index].value++;
        this.setState({
            counters: cloneCounters
        })
        this.updateStateNavbarCountProduct();
    }

    handleResetData = () => {
        const resetData = this.state.counters.map(item => {
            item.value = 0;
            return item;
        })
        this.setState({
            counters: resetData
        })
        this.updateStateNavbarCountProduct();
    }

    handleRevertData = () => {
        this.setState({
            counters: dataCounter
        });
        this.updateStateNavbarCountProduct();
    }

    render() {
        return (
            <div>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onReset={this.handleResetData}
                        onRevert={this.handleRevertData} />
                    <HandleStore />
                </main>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNavbarCount: (num: number) => dispatch(updateNavbarCount(num))
    }
}

export default connect(null, mapDispatchToProps)(PageCounter);