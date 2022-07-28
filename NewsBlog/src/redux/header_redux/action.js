import axios from "axios"
import { SEARCH_FOCUS, SEARCH_BLUR,CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE, CHANGE_HOME_DATA } from "../constant"

export function searchInputFocusAction() {
    return { type: SEARCH_FOCUS }
}

export function searchInputBlurAction() {
    return { type: SEARCH_BLUR }
}

export function mouseEnterAction(){
    return{type:MOUSE_ENTER}
}

export function mouseLeaveAction(){
    return{type:MOUSE_LEAVE}
}

export function changePageAction(page) {
    return { type: CHANGE_PAGE, page }

}

const changeList = (data) => {
    return {
        type:CHANGE_LIST, 
        data:data,
        totalPage:Math.ceil(data.length/10)
    }
}

export function getList() {
    return (dispatch) => {
        axios.get("/api/headerList.json").then((res) => {
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log("error")
        })
    }
}

export const getHomeInfo=()=>{
    return(dispatch)=>{
        axios.get("/api/db.json").then((res)=>{
            const result = res.data
            const action = {
              type:CHANGE_HOME_DATA,
              topicList:result.topicList,
              articleList:result.articleList
            }
            dispatch(action)
          })
    }
}