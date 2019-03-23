// imports

// actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOG_OUT = "LOG_OUT";
const SET_USER_LIST = "SET_USER_LIST";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";

// action creators

function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  };
}

function logout() {
  return {
    type: LOG_OUT
  };
}

function setUserList(userList) {
  return {
    type: SET_USER_LIST,
    userList
  };
}

function setFollowUser(userId) {
  return {
    type: FOLLOW_USER,
    userId
  };
}

function setUnfollowUser(userId) {
  return {
    type: UNFOLLOW_USER,
    userId
  };
}

// API actions

function facebookLogin(access_token) {
  return dispatch => {
    fetch("/users/login/facebook/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_token
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
  };
}

function usernameLogin(username, password) {
  return dispatch => {
    fetch("/rest-auth/login/", {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
  };
}

function createAccount(email, name, username, password) {
  return dispatch => {
    fetch("/rest-auth/registration/", {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password1: password,
        password2: password,
        email,
        name
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
  };
}

function getUserList(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`/images/${photoId}/likes/`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`,
        "content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => {
        return dispatch(setUserList(json));
      })
      .catch(err => console.log(err));
  };
}

function followUser(userId) {
  return (dispatch, getState) => {
    dispatch(setFollowUser(userId));
    const {
      user: { token }
    } = getState();
    fetch(`/users/${userId}/follow/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "content-Type": "application/json"
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(logout());
      } else if (!response.ok) {
        dispatch(setUnfollowUser(userId));
      }
    });
  };
}

function unfollowUser(userId) {
  return (dispatch, getState) => {
    dispatch(setUnfollowUser(userId));
    const {
      user: { token }
    } = getState();
    fetch(`/users/${userId}/unfollow/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "content-Type": "application/json"
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(logout());
      } else if (!response.ok) {
        dispatch(setFollowUser(userId));
      }
    });
  };
}

// initial state

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt")
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySaveToken(state, action);
    case LOG_OUT:
      return applyLogout(state, action);
    case SET_USER_LIST:
      return applySetUserList(state, action);
    case FOLLOW_USER:
      return applyFollowUser(state, action);
    case UNFOLLOW_USER:
      return applyUnfollowUser(state, action);
    default:
      return state;
  }
}

// reducer functions

function applySaveToken(state, action) {
  const { token } = action;
  localStorage.setItem("jwt", token);
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

function applyLogout(state, action) {
  localStorage.removeItem("jwt");
  return {
    isLoggedIn: false
  };
}

function applySetUserList(state, action) {
  const { userList } = action;
  return {
    ...state,
    userList
  };
}
function applyFollowUser(state, action) {
  const { userId } = action;
  const { userList } = state;
  const updateList = userList.map(user => {
    if (user.id === userId) {
      return {
        ...user,
        following: true
      };
    }
    return user;
  });
  return {
    ...state,
    userList: updateList
  };
}
function applyUnfollowUser(state, action) {
  const { userId } = action;
  const { userList } = state;
  const updateList = userList.map(user => {
    if (user.id === userId) {
      return {
        ...user,
        following: false
      };
    }
    return user;
  });
  return {
    ...state,
    userList: updateList
  };
}

// exports

const actionCreators = {
  facebookLogin,
  usernameLogin,
  createAccount,
  logout,
  getUserList,
  followUser,
  unfollowUser
};

export { actionCreators };

// reducer export

export default reducer;
