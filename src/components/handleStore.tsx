import { Component } from "react";
import { decrement, increment } from "../actions";
class HandleStore extends Component<any> {

    render() {
        const {isLogged, counterRedux, dispatch} = this.props;

        return (
            <>
                <br />
                <h1>Counter In Redux Store Is: {counterRedux}</h1>
                <button className="btn btn-primary btn-sm m-2" onClick={() => dispatch(increment(1))}>+</button>
                <button className="btn btn-secondary btn-sm m-2" onClick={() => dispatch(decrement(1))}>-</button>
                {isLogged ? <h3>Valuable Information I Shouldn't see</h3> : ''}
            </>
        )
    }
}

export default HandleStore;