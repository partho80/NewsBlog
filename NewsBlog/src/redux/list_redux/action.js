import axios from "axios"
import {ADD_ARTICLE_LIST, TOGGLE_SCROLL_TOP} from "../constant"

const addHomeList=(list,nextPage)=>({
    type:ADD_ARTICLE_LIST,
    list:list,
    nextPage:nextPage
})

export const getMoreList=(page)=>{
    return(dispatch)=>{
        axios.get("/api/homeList.json?page="+page).then((res)=>{
            const result = res.data.data
            dispatch(addHomeList(result,page+1))
        })
    }
}

const toggleTopShow = (show) => {
    return{type:TOGGLE_SCROLL_TOP, show:show}
}

export const changeScrollTopShow = () => {
    return(dispatch)=>{
        if(document.documentElement.scrollTop>100){
        dispatch(toggleTopShow(true))
    }else{
        dispatch(toggleTopShow(false))
    }
    }
    
}