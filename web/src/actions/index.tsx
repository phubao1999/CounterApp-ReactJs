import { constants } from "../constants/constant";

export const increment = (number: number) => {
    return {
        type: constants.reducerAction.INCREMENT,
        payload: number
    };
}

export const decrement = (number: number) => {
    return {
        type: constants.reducerAction.DECREMENT,
        payload: number
    };
}

export const updateNavbarCount = (number: number) => {
    return {
        type: constants.reducerAction.COUNTING_NAVBAR,
        counter: number
    };
}