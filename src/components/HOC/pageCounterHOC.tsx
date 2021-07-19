import { useDispatch } from "react-redux";
import PageCounter from "../pages/pageCounter";

export default function PageCounterHOC() {
    const dispatch = useDispatch();

    return (
        <>
            <PageCounter dispatch={dispatch} />
        </>
    )
}