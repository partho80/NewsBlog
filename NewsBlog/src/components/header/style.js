import styled from "styled-components";
import logoPic from "../statics/logo.jpg"

export const HeaderWrapper = styled.div`
    z-index:1;
    position: relative;
    height:56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size: contain;
    background-repeat: no-repeat;
`;

export const SearchInfo = styled.div`
    position:absolute;
    left:0
    top: 56px;
    width:240px;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:8px;
    color:#787878;
    text-align:left;
`
export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    .spin{
        display:block;
        float:left;
        margin-right:2px;

    }

`
export const SearchInfoList = styled.div`
    overflow:hidden;
`


export const SearchInfoItem = styled.a`
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:15px;
    line-height:20px;
    padding:0 5px;
    font-size:12px;
    border:1px solid #ddd;
    color:#969696;
    border-radius:3px;
`

export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin: 0 auto;
`

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    color:#333;
    font-size:17px;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    margin-left:30px;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: "Search"
})`
    width:200px;
    height:38px;
    box-sizing:border-box;
    padding:0 30px 0 20px;
    margin-top:9px;
    border:none;
    outline:none;
    border-radius:19px;
    background-color:#eee;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:250px;
    }
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width:250px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width:200px;
    }
`
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
`
export const Button = styled.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    border-radius:19px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background-color:#ec6149;
    }
`