import styled from "styled-components";

export const HomeWrapper = styled.div`
    width:1080px;
    margin:0 auto;
    overflow:hidden;
`
export const HomeLeft = styled.div`
    width:625px;
    margin-left:10px;
    padding-top:30px;
    float:left;
    .banner-img{
        width:625px;
        height:300px;

    }
`
export const HomeRight = styled.div`
    width:280px;
    float:right;
`

export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
`