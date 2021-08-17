const initialState = {
  activeModal: false,
  selectedLinkName:'',
  selectedLinkURL:'',
  selectedVoteIndexNo:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "MODAL_STATUS":
      return {
        ...state,
        activeModal: action.payload.status,
        selectedLinkName:action.payload.linkName,
        selectedLinkURL:action.payload.linkURL,
        selectedVoteIndexNo:action.payload.voteCardIndexNo
      };
    default:
      return state;
  }
};
