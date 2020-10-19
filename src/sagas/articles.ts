import { call, put } from 'redux-saga/effects';
import { fetchAll, fetchSingle } from '../api/article'
import { FETCH_ARTICLES_COMPLETE, FETCH_ARTICLE_SINGLE_COMPLETE } from '../constants/ActionTypes';

export function* fetchArticles() {
  try {
    const data = yield call(fetchAll)
    yield put({type: FETCH_ARTICLES_COMPLETE, data})
  } catch (error) {
    console.error(error)
  }
}


export function* fetchArticleSingle(action) {
  try {
    const data = yield call(fetchSingle, action.id)
    yield put({type: FETCH_ARTICLE_SINGLE_COMPLETE, data})
  } catch (error) {
    console.error(error)
  }
}
