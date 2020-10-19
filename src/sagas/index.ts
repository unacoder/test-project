import { put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_ARTICLES, FETCH_ARTICLE_SINGLE, FETCH_TAGS } from '../constants/ActionTypes';
import { fetchArticles, fetchArticleSingle } from './articles';
import { fetchTags } from './tags';

export default function* rootSaga() {
  yield takeLatest(FETCH_ARTICLES, fetchArticles)
  yield takeLatest(FETCH_ARTICLE_SINGLE, fetchArticleSingle)
  yield takeLatest(FETCH_TAGS, fetchTags)
}
