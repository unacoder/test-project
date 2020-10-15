import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../rootReducer'
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const initialState = {}
const enhancers: any[] = []
const middleware = [sagaMiddleware, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  enhancers.push(devToolsEnhancer({}))
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
)

sagaMiddleware.run(rootSaga);
