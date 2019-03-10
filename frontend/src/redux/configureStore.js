import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import users from 'redux/modules/users';

const history = createBrowserHistory();

const env = process.env.NODE_ENV;

const middlewares = [thunk, routerMiddleware(history)];

if(env === "development") {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const reducer = combineReducers({
    users,
    router:connectRouter(history)
})

let store = initialState => createStore(reducer, applyMiddleware(...middlewares));

export { history };

export default store();