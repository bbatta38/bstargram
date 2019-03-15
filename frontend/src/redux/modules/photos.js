// import
import { actionCreators as userActions } from "redux/modules/user";

// actions

const SET_FEED = "SET_FEED";

// action creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

// API actions

function getFeed() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch("/images/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setFeed(json)));
  };
}

// initial states

const initialState = {};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    default:
      return state;
  }
};

// redcer functions

function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

const actionCreators = {
  getFeed,
  setFeed
};

export { actionCreators };

// export

export default reducer;
