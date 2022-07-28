import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Content, DetailWrapper, Header } from './style'
import { getDetailAction } from '../../redux/detail_redux/action'
import { useParams } from 'react-router-dom'

export function DetailPage() {
  let {detailList} = useSelector(state=>state.detail)

  const dispatch = useDispatch()
  const params = useParams()
  
  useEffect(()=>{
    dispatch(getDetailAction(params.id))
  },[])

  // detailList = detailList[0]
  // console.log(detailList[0])

  return (
    <div>
      {
        
       detailList.map((item) => {
          return (
            <DetailWrapper key={item.id}>
              <Header>{item.title}</Header>
              <Content>
                  <img alt="" src={item.imgUrl}></img>
                  <p>{item.content}</p>
              </Content>
            </DetailWrapper>
          )
        })
      }
    </div>
  )
}
