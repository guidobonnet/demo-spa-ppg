import Actions from '../constants/actions';

const initialState = {
  shows: {}
};

const rootReducer = (state = initialState, action) => {
  if (action.type === Actions.FETCH_SHOW) {
    const {_embedded, _links, ...show} = action.payload;

    const shows = {
      ...state.shows,
    ...{[action.payload.id]: {...show, ..._embedded}}
    };

    return {...state, shows};
  }
  return state
};

export default rootReducer;