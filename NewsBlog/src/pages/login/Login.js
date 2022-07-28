import React, {Component} from 'react'
import { LoginBox, LoginWrapper, Input, Button } from './style'
import { loginAction } from '../../redux/login_redux/action'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

class Login extends Component{ 
  
  handleLogin(accountElem, passwordElem){
    this.props.loginA(accountElem.value, passwordElem.value)
  }

  render() {

    const { loginStatus} = this.props
    if (!loginStatus.login) {  
    return (
      <LoginWrapper>
        Login
        <LoginBox>
          <Input placeholder="account" ref={input => this.account = input}></Input>
          <Input placeholder="password" type="password" ref={input => this.password = input}></Input>

          {/* <input className="loginInput" placeholder="Account" value={username} onChange={e => setUsername(e.target.value)}></input>
            <input className="loginInput" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input> */}
          <Button onClick={() => this.handleLogin(this.account, this.password)}>Login</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }else{
    return <Navigate to="/" />
    
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
    loginA:(account,password)=>{
      dispatch(loginAction(account, password))
    }
  }
}




export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login)
