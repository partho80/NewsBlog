import axios from "axios"
import { CHANGE_DETAIL } from "../constant"


const changeDetail = (list) => {
    return{
        type:CHANGE_DETAIL,
        list:list
    }
}

export const getDetailAction = (id) => {
    return(dispatch)=>{
        axios.get("/api/detail.json").then((res)=>{
            const result = res.data.data
            // console.log(result[id])
            const a = [result[id-1] ]
            // console.log(a)
            dispatch(changeDetail(a))
        })
    }
}