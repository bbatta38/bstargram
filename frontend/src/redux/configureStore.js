import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { i18nState } from "redux-i18n";
import user from "redux/modules/user";
import photos from "redux/modules/photos";
import { composeWithDevTools } from "redux-devtools-extension";

const history = createBrowserHistory();

const env = process.env.NODE_ENV;

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  user,
  photos,
  router: connectRouter(history),
  i18nState
});

let store;
if (env === "development") {
  store = initialState =>
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();
