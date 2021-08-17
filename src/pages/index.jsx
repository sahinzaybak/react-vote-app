import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

//Components
import VoteCard from '../components/vote-card'
import DropDown from "../components/atoms/dropdown/dropdown";
import SubmitButton from "../components/atoms/submit-button/submit-button";
import Modal from "../components/molecules/modal/modal";
import Alert from '../components/molecules/alert/alert'
import Paginations from '../components/molecules/paginations/paginations'

//Actions
import { loadVoteLocalStorage } from '../store/actions/vote'

let voteList, selectedLinkName
const Index = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(5)

  selectedLinkName = useSelector(state => state.alert.selectedLinkName)
  voteList = useSelector(state => state.vote.voteList)
  if (voteList.length != 0) localStorage.setItem("voteList", JSON.stringify(voteList)) //state voteList yenilendiğinde localStorage'de yenilenir.

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("voteList")) != null) dispatch(loadVoteLocalStorage()) //localStorage vote bilgilerini al ve voteList state'sini doldur.
  }, []);

  const indexLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexLastPost - postPerPage 
  const currentPost = voteList.slice(indexOfFirstPost, indexLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="vote">
      <div className="custom-container">
        <div className="vote-wrp">
          <div className="vote-header">
            <DropDown />
            <SubmitButton name="Submit a link" link="/add-link" />
          </div>
          <div className="vote-card">
            {voteList == "" && <p>A link has not been entered for you to vote..</p>}
            <div className="vote-card__row">
              {voteList != null && currentPost.map((voteInfo, index) =>
                <VoteCard key={index} vote={voteInfo} indexNo={index} />
              )}
            </div>
            <Paginations postPerPage={postPerPage} totalPosts={voteList.length} paginate={paginate} />
          </div>
        </div>
        <Modal headerTitle="Remove Link" title="Do you want to remove:" successButtonName="Ok" cancelButtonName="Cancel" />
        <Alert text={selectedLinkName} status="remove" />
      </div>
    </div>
  );
};

export default Index;