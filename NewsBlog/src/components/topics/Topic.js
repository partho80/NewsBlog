import React from 'react'
import { useSelector } from 'react-redux'
import { TopicWrapper,TopicItems } from './style'

export function Topic() {

    const {topicList} = useSelector(state=>state.topic)
    // console.log(topicList)

  return (
    <TopicWrapper>
    {
        topicList.map((item)=>{
            return <TopicItems key={item.id}>{item.title}</TopicItems>
        })
    }
    </TopicWrapper>
  )
}
