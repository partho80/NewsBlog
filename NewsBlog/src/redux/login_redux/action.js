import axios from "axios"
import { CHANGE_LOGIN, LOGOUT } from "../constant"

const changeLogin = () =>({
    type: CHANGE_LOGIN,
    value:true
})

export const logOutAction = () =>{
    return{
        type:LOGOUT,
        value:false
    }
}

export const loginAction = (account, password) => {
    return(dispatch)=>{
        axios.get("/api/login.json?account="+account+"&password="+password).then((res)=>{
            console.log(res)
            const result = res.data.data
            if(result){
                dispatch(changeLogin())
            }else{
                alert("Login Failed")
            }
        })
    }

}