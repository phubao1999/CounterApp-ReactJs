import { Component } from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../actions";
class HandleStore extends Component<any> {
    render() {
        return (
            <>
                <br />
                <h1>Counter In Redux Store Is: {this.props.counter}</h1>
                <button className="btn btn-primary btn-sm m-2" onClick={() => this.props.increment()}>+</button>
                <button className="btn btn-secondary btn-sm m-2" onClick={() => this.props.decrement()}>-</button>
                {this.props.logged ? <h3>Valuable Information I Shouldn't see</h3> : ''}
            </>
        )
    }
}

const mapStateToProps = (state: any) => ({
    counter: state.counter,
    logged: state.logged
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        increment: () => dispatch(increment(1)),
        decrement: () => dispatch(decrement(1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HandleStore);