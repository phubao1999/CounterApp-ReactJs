import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions";

export default function HandleStore() {
    const counterRedux = useSelector((state: any) => state.counter);
    const isLogged = useSelector((state: any) => state.logged);
    const dispatch = useDispatch();

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