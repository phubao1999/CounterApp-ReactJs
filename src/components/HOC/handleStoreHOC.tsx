import { useDispatch, useSelector } from "react-redux";
import HandleStore from "../handleStore";

export default function HandleStoreHOC() {

    const counterRedux = useSelector((state: any) => state.counter);
    const isLogged = useSelector((state: any) => state.logged);
    const dispatch = useDispatch();

    return (
        <>
            <HandleStore
                counterRedux={counterRedux}
                isLogged={isLogged}
                dispatch={dispatch}
            />
        </>
    )
}