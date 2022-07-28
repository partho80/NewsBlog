import React, { useEffect } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style"
import RealMadrid from "../../components/statics/Realmadrid.png"
import { Topic, List, Recommend } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { changeScrollTopShow } from '../../redux/list_redux/action'

export function HomePage() {

  const { showScroll } = useSelector(state => state.list)
  const dispatch = useDispatch()

  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  const useFn = () => {
    dispatch(changeScrollTopShow())
  }

  useEffect(()=>{
    window.addEventListener("scroll", useFn)
    return()=>{
    window.removeEventListener("scroll", useFn)
  }

  },[])
  
  return (
    <HomeWrapper>
      <HomeLeft>
        <img className="banner-img" src={RealMadrid}></img>
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
      </HomeRight>
      {
        showScroll ?
          <BackTop onClick={handleScrollTop}>Top</BackTop> :
          null
      }
    </HomeWrapper>

  )
}
