const initialState = {
  voteList: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_VOTE":
      if (JSON.parse(localStorage.getItem("voteList") == null)) {
        return {
          ...state,
          voteList: [...state.voteList, action.payload].reverse()
        };
      } 
      else {
        return {
          ...state,
          voteList: [...JSON.parse(localStorage.getItem("voteList")),action.payload].reverse()
        };
      }

    case "ADD_VOTE_LOCAL_STORAGE":
      return {
        ...state,
        voteList: action.payload,
      };

    case "VOTE_UP_OR_DOWN":
      const defaultVoteList = [...state.voteList];
      defaultVoteList.forEach((_voteList) => {
        if (_voteList.linkURL == action.payload.linkURL)
          _voteList.voteCount = action.payload.voteCount;
          state.voteList.sort(function (x, y) { return (y.voteCount - x.voteCount)})
      });
      return {
        ...state,
        voteList: [...state.voteList],
      };

    case "VOTE_ITEM_DELETE":
      if (state.voteList.length == 1) localStorage.clear();
      const newVoteList = [...state.voteList]; //immutable
      newVoteList.splice(action.payload, 1);
      return {
        ...state,
        voteList: newVoteList,
      };

    case "MOST_VOTED":
      return {
        ...state,
        voteList: [...state.voteList.sort(function (x, y) { return (y.voteCount - x.voteCount)})],
    };

    case "LESS_VOTED":
      return {
        ...state,
        voteList: [...state.voteList.sort(function (x, y) { return (x.voteCount - y.voteCount)})],
    };
    default:
      return state;
  }
};
