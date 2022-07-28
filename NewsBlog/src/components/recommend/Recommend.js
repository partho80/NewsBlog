import React from 'react'
import { RecommendWrapper, RecommendItem } from './style'
import subscribe from "../statics/subscribe.png"
import share from "../statics/share.png"
import popular from "../statics/popular.png"
import view from "../statics/view.png"

export function Recommend() {
  return (
    <RecommendWrapper>
        <RecommendItem style={{background:"#eb4d4b"}}>
            <img className="pic" src={popular} />
            Most Popular
        </RecommendItem>
        <RecommendItem style={{background:"#7ed6df"}}>
        <img className="pic" src={subscribe} />
            Most Subscribed
        </RecommendItem>
        <RecommendItem style={{background:"#6ab04c"}}>
        <img className="pic" src={share} />
            Top Shared
        </RecommendItem>
        <RecommendItem style={{background:"#f9ca24"}}>
        <img className="pic" src={view} />
            Most Viewed
        </RecommendItem>
    </RecommendWrapper>
  )
}
