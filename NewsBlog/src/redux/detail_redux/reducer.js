import { CHANGE_DETAIL } from "../constant";

const defaultState = {
    detailList:[]
};

export default (state=defaultState, action) => {
    switch (action.type) {
        case CHANGE_DETAIL:
            return {
                ...state, detailList:action.list
            }
        default:
            return state;
    }
}