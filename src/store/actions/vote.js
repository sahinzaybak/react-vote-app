export const addVote = (linkName,linkURL,voteCount) => (dispatch) => {
  dispatch({
    type: "ADD_VOTE",
    payload: {linkName,linkURL,voteCount}
  });
};

export const loadVoteLocalStorage = () => (dispatch) => {
  dispatch({
    type: "ADD_VOTE_LOCAL_STORAGE",
    payload: JSON.parse(localStorage.getItem("voteList"))
  });
};

export const voteUpOrDown = (linkURL, voteCount) => (dispatch) => {
  dispatch({
    type: "VOTE_UP_OR_DOWN",
    payload: {
      linkURL:linkURL,
      voteCount:voteCount,
    }
  });
};





