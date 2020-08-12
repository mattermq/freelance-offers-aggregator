import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavouriteAC, toggleFavouriteThunk, closeExpandedAC, closeExpandedProjectCardAC } from '../../../store/slice';
import heartWhite from '../../../img/heart_white.png';
import heartBlack from '../../../img/heart_black.png';
import Tag from '../../Tag';

export default function CardExpanded(props) {
  const dispatch = useDispatch()
  let { _id, title, description, budget, publishedAt, tags, isFavourite, url } = props.offer
  const isAuth = useSelector(state => state.slice.user.isAuth)
  const userId = useSelector(state => state.slice.user._id)
  const activeTab = useSelector(state => state.slice.view.profileActiveTab)

  const toggleFauvourite = () => {
    dispatch(toggleFavouriteAC(_id))
    dispatch(toggleFavouriteThunk({ userId, offerId: _id }))
  }

  const closeExpanded = () => {
    if (activeTab === 1)
      dispatch(closeExpandedAC())
    else
      dispatch(closeExpandedProjectCardAC())
  }

  return (
    <article className="card_extended">
      <div className="wrap_cardMainText">
        <div className="cardMainText">{title}</div>
        <div className="priceCard">{budget}</div>
      </div>
      <div className="cardText">{description}</div>
      <div className="dateTime">{publishedAt}</div>
      <div className="wrapHeartAndTags">
        <div className="wrapTags">
          {tags.map((tag, index) => <Tag key={index} className="tag" tag={tag}></Tag>)}
        </div>

        <div className="wrap_openAndHeart">
          <button onClick={closeExpanded} className="btnOpenCard">свернуть</button>
          <a href={url} target="_blank"><button>Перейти к обьявлению</button></a>
          {
            isAuth && <button onClick={toggleFauvourite} className="btnHeartCard">
              <img className="imgHeartCard" src={isFavourite ? heartBlack : heartWhite} alt="favourite" />
            </button>
          }
        </div>

      </div>
    </article>
  )
}
