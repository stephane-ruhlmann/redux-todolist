const initialState = {
  list : ["Learn Redux", "Teach React"]
};

export default function listReducer(state=initialState, action) {
  switch (action.type) {
    case "ADD_TODO" :
      return Object.assign({}, state, {list : state.list.concat(action.toAdd)});
    case "REMOVE_TODO" :
      const newList = [...state.list.slice(0, action.toRemove), ...state.list.slice(action.toRemove +1, state.list.length)];
      return Object.assign({}, state, {list : newList});
    default :
      return state;
  }
};