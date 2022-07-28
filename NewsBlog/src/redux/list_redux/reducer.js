import { ADD_ARTICLE_LIST, CHANGE_HOME_DATA, TOGGLE_SCROLL_TOP } from "../constant";

const defaultState = {
    articleList:[],
    articlePage:1,
    showScroll:false
};

export default (state=defaultState, action) => {
    switch (action.type) {
       case CHANGE_HOME_DATA:
           return {...state, articleList:action.articleList}
        case ADD_ARTICLE_LIST:
            const newList = state.articleList.concat(action.list)
            return {...state, articleList:newList, articlePage:action.nextPage}
        case TOGGLE_SCROLL_TOP:
            return {...state, showScroll:action.show}
        default:
            return state;
    }
}