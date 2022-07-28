import {SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from "../constant"
import { fromJS } from "immutable";


// const defaultState = fromJS({
//     focused:false,
//     list:[]
// });

const defaultState = {
    focused:false,
    list:[],
    page:1,
    mouseIn:false,
    totalPage:1
};

export default (state=defaultState, action) => {
    switch (action.type) {
        case SEARCH_FOCUS:
            return {
                ...state, focused: true
            };
        case SEARCH_BLUR:
            return {
                ...state, focused: false
            };
        case CHANGE_LIST:
            return {
                ...state, list: action.data, totalPage:action.totalPage
            };
        case MOUSE_ENTER:
            return{
                ...state, mouseIn:true
            };
        case MOUSE_LEAVE:
            return{
                ...state, mouseIn:false
            }
        case CHANGE_PAGE:
        return {
            ...state, page:action.page
            };
        default:
            return state;
    }
}