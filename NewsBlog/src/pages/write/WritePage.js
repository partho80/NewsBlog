import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

class Write extends Component{ 
  
  handleLogin(accountElem, passwordElem){
    this.props.loginA(accountElem.value, passwordElem.value)
  }

  render() {

    const { loginStatus} = this.props
    if (!loginStatus.login) {  
    return (
      <div>Write</div>
    )
  }else{
    return <Navigate to="/login" />
    
  }
  

  }
}

const mapStateToProps = (state) =>{
    return{
      loginStatus:state.login
    }
}

const mapDispatchToProps = (dispatch) => {
  return{
    
  }
}




export const WritePage = connect(mapStateToProps, mapDispatchToProps)(Write)
