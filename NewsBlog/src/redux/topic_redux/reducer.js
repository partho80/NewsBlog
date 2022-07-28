import { CHANGE_HOME_DATA } from "../constant";

const defaultState = {
    topicList:[]
};

export default (state=defaultState, action) => {
    switch (action.type) {
        case CHANGE_HOME_DATA:
            return {...state, topicList:action.topicList}
        default:
            return state;
    }
}