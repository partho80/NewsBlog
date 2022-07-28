import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import header_reducer from "./header_redux/reducer"
import topic_reducer from "./topic_redux/reducer"
import list_reducer from "./list_redux/reducer"
import detail_reducer from "./detail_redux/reducer"
import login_reducer from "./login_redux/reducer"

const allReducer = combineReducers({
    header:header_reducer,
    topic:topic_reducer,
    list:list_reducer,
    detail:detail_reducer,
    login:login_reducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducer,composeEnhancers(
    applyMiddleware(thunk)
));
export default store
