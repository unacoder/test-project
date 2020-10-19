import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'

import articleReducer, { ArticlesState } from './articles'
import tagsReducer, { TagsState } from './tags'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()


export interface RootState {
  articles: ArticlesState
  tags: TagsState
}

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

const rootReducer = combineReducers({
  router: connectRouter(history),
  articles: articleReducer,
  tags: tagsReducer
})

export default createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

sagaMiddleware.run(rootSaga)
