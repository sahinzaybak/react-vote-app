import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

//Component/Atoms
import BackPage from '../components/atoms/back-page/back-page'
import PageTitle from '../components/atoms/page-title/page-title'
import Input from '../components/atoms/input/input'
import Button from '../components/atoms/button/button'
import Alert from '../components/molecules/alert/alert'
import ErrorMessage from '../components/atoms/error-message/error-message'

//Actions
import { addVote } from '../store/actions/vote'

let voteList, selectedLinkName
const NewLink = () => {
  voteList = useSelector(state => state.vote.voteList)
  const dispatch = useDispatch()
  const [linkName, setLinkName] = useState("");
  const [linkURL, setLinkURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  selectedLinkName = useSelector(state => state.alert.selectedLinkName)

  async function addLink() {
    if (linkName == "" || linkURL == "") { setIsError(true); setErrorMessage("Lütfen tüm alanları doldurun.") }
    else {
      let isLinkControl = voteList.some(x => x.linkURL == linkURL)
      if (isLinkControl) { setIsError(true); setErrorMessage("Bu link adında zaten bir site mevcut..") }
      else {
        await dispatch(addVote(linkName, linkURL, 0))
        await dispatch({ type: "ALERT_STATUS", payload: { status: true, selectedLinkName: linkName } })
        setTimeout(() => { dispatch({ type: "ALERT_STATUS", payload: { status: false } }) }, 1000);
        localStorage.setItem("voteList", JSON.stringify(voteList))
        setIsError(false);
        setLinkName("")
        setLinkURL("")
      }
    }
  }

  return (
    <div className="new-link">
      <div className="custom-container">
        <BackPage title="Return to List" link="/" />
        <PageTitle title="Add New Link" />
        <div className="new-link__form">
          <Input title="Link Name" placeholder="Facebook" value={linkName} onChange={e => setLinkName(e.target.value)} />
          <Input title="Link URL" placeholder="www.facebook.com" value={linkURL} onChange={e => setLinkURL(e.target.value)} />
        </div>
        <div>
          <Button name="Add Link" onClick={addLink} />
        </div>
        <ErrorMessage message={errorMessage} isActive={isError} />
        <Alert text={selectedLinkName} status="success" />
      </div>
    </div>
  );
};

export default NewLink;