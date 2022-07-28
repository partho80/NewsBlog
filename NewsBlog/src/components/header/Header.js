import React, {useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style"
import { searchInputFocusAction, searchInputBlurAction, getList, mouseEnterAction, mouseLeaveAction, changePageAction, getHomeInfo } from '../../redux/header_redux/action'
import "../statics/iconfont/iconfont.css"
import { Link } from 'react-router-dom'
import { logOutAction } from '../../redux/login_redux/action'


// const apiUrl = process.env.REACT_APP_API_URL;

export const Header=() =>{
  const { focused, list, page, mouseIn, totalPage} = useSelector(state => state.header)
  const {login} = useSelector(state=>state.login)
  const dispatch = useDispatch()
  const pageList=[]
  const icon = useRef()
  
  // console.log(list)
  useEffect(() => {
    // if(list.length===0){
      dispatch(getList())
    // }
      dispatch(getHomeInfo())
  }, [])
  

  const getListArea = ()=>{
    for(let i=(page-1)*10;i<page*10;i++){
      pageList.push(
        <SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem> 
      )
    }
  }

  const handleSearchClick = (page, totalPage) => {
    return () => {
      if (page < totalPage) {
        dispatch(changePageAction(page + 1))
      } else {
        dispatch(changePageAction(1))
      }
    }
  }

  const logOut = () => {
    dispatch(logOutAction())
  }

  return (
    <div>
      <HeaderWrapper>
      <Link to="/">
        <Logo></Logo>
      </Link>
        
        <Nav>
        <Link to="/">
          <NavItem className="left active">Home</NavItem>
        </Link>  
          <NavItem className="left active">DownLoad</NavItem>
          {
            login ?
              <NavItem className="right" onClick={logOut}>Sign Out</NavItem> :
              <Link to="/login">
                <NavItem className="right">Login</NavItem>
              </Link>
          }
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch className={focused ? "focused" : " "} onFocus={() => dispatch(searchInputFocusAction())} onBlur={() => dispatch(searchInputBlurAction())}></NavSearch>
            </CSSTransition>
            <span className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe699;</span>
         
            {
              (mouseIn||focused)?
                (<SearchInfo onMouseEnter={()=>dispatch(mouseEnterAction())} onMouseLeave={()=>dispatch(mouseLeaveAction())}>
                  <SearchInfoTitle>
                    Recommend Search
                    
                    <SearchInfoSwitch onClick={handleSearchClick(page,totalPage)}>
                      <span ref={icon} className="iconfont spin">&#xe606;</span>                   
                      Change
                    </SearchInfoSwitch>
                  </SearchInfoTitle>
                  <SearchInfoList>
                    {/* {list.map((item) => { return <SearchInfoItem key={item}>{item}</SearchInfoItem> })} */}
                    {getListArea()}
                    {pageList}
                  </SearchInfoList>
                </SearchInfo>) :
                null
            }
          
          </SearchWrapper>
          <Addition>
          <Link to="/write">
            <Button className='writting'>
              <span className="iconfont">&#xe600;</span>
              Note
            </Button>
          </Link>
            
            <Button className='reg'>Register</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>

    </div>
  )
}

// const mapStateToProps=(state)=>{
//     return{
//       focused:state.header.focused
//     }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return{
//     InputFocus:()=>{
//       dispatch(searchInputFocusAction())
//     },
//     InputBlur:()=>{
//       dispatch(searchInputBlurAction())
//     }
//   }
// }

// const headerContainer = connect(mapStateToProps, mapDispatchToProps)(Header)
// export default headerContainer