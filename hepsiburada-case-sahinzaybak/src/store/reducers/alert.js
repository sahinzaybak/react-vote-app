const initialState = {
  isActiveAlert: false,
  selectedLinkName:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ALERT_STATUS":
      return {
        ...state,
        isActiveAlert: action.payload.status,
        selectedLinkName: action.payload.selectedLinkName
      };
     
    default:
      return state;
  }
};
