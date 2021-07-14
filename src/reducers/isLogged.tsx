import { constants } from "../constants/constant";

const loggedReducer = (state = false, action: any) => {
    switch (action.type) {
        case constants.reducerAction.SIGN_IN:
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;