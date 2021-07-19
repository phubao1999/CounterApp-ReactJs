import { constants } from "../constants/constant";

const navbarCounterReducer = (state = 0, action: { type: string, counter: number }) => {
    switch (action.type) {
        case constants.reducerAction.COUNTING_NAVBAR:
            return state = action.counter
        default:
            return state;
    }
}

export default navbarCounterReducer;