import React, { useState } from "react";
import PropTypes from 'prop-types';
import {useDispatch } from 'react-redux'
import '../assets/scss/vote-card.scss'

//Icons
import like from '../assets/images/like.svg'
import remove from '../assets/images/remove.svg'

//Actions
import { voteUpOrDown } from '../store/actions/vote'

const VoteCard = ({ vote, indexNo }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingTime] = useState(800)
  const dispatch = useDispatch()
  
  function loading() {
    setIsLoading(true)
    setTimeout(() => {setIsLoading(false)}, isLoadingTime);
  }
  
  return (
    <div className="vote-card__col">
      <div className="vote-card__item">
        <div className="card-point">
          <div className={`card-point__wrp ${isLoading ? "disabled" : ""}`}>
            <p className="card-point__count">{vote.voteCount}</p>
            <span className="card-point__title">POINTS</span>
          </div>
          <div className={`spinner ${isLoading ? "active" : ""}`}></div>
        </div>
        <div className="card-name">
          <h2 className="card-name__title">{vote.linkName}</h2>
          <p className="card-name__link">{vote.linkURL}</p>
        </div>
        <div className={`vote-card__actions ${isLoading ? "disabled" : ""}`}>
          <div className="vote-card__actions-item" onClick={() => {
            loading();
            setTimeout(() => { dispatch(voteUpOrDown(vote.linkURL, vote.voteCount + 1)) }, isLoadingTime)}}>
            <img src={like} alt="up-vote" />
            <span>Up Vote</span>
          </div>
          <div className="vote-card__actions-item" onClick={() => {
            if(vote.voteCount != 0){
              loading();
              setTimeout(() => { dispatch(voteUpOrDown(vote.linkURL, vote.voteCount - 1)) }, isLoadingTime)}}
            }>
            <img src={like} alt="up-vote" />
            <span>Down Vote</span>
          </div>
        </div>
        <div className="vote-card__delete" onClick={() => {
          (dispatch({
            type: 'MODAL_STATUS',
            payload: {
              status: true,
              linkName: vote.linkName,
              linkURL: vote.linkURL,
              voteCardIndexNo: indexNo
            }
          }))
        }}>
          <img src={remove} alt="" />
        </div>
      </div>
    </div>
  );
};

VoteCard.propTypes = {
  vote: PropTypes.object.isRequired,
  indexNo: PropTypes.number.isRequired
};

export default VoteCard;