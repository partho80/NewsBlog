import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from "./style"
import { getMoreList } from '../../redux/list_redux/action'
import { Link } from 'react-router-dom'

export function List() {
    const { articleList, articlePage } = useSelector(state => state.list)
    const dispatch = useDispatch()

    const handleClick = (page) => {
        dispatch(getMoreList(page))
    }
    return (
        <div>
            {
                articleList.map((item) => {
                    return (
                        <ListItem key={item.id}>
                            <img className="pic" src={item.imgUrl} />
                            <ListInfo>
                                <Link key={item.id} to={"/detail/"+item.id} >
                                    <h3 className='title'>{item.title}</h3>
                                </Link>
                                <p className='desc'>{item.desc}</p>
                            </ListInfo>
                        </ListItem>
                    );
                })
            }
            <LoadMore onClick={() => handleClick(articlePage)}>LoadMore</LoadMore>
        </div>

    )
}
