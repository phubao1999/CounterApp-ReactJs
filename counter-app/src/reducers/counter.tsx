import { constants } from "../constants/constant";

const counterReducer = (state = 0, action: any) => {
    switch (action.type) {
        case constants.reducerAction.INCREMENT:
            return state + action.payload;
        case constants.reducerAction.DECREMENT:
            return state - action.payload;
        default:
            return state;
    }
}

export default counterReducer;