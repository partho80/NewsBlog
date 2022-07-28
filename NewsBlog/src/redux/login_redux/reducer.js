import { CHANGE_LOGIN, LOGOUT } from "../constant";

const defaultState = {
    login:false
};

export default (state=defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {...state, login:action.value}
        case LOGOUT:
            return {...state, login:action.value}
        default:
            return state;
    }
}