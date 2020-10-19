import { call, put } from 'redux-saga/effects';
import { fetchTagsRequest } from '../api/tags'
import { FETCH_TAGS_SUCCESS } from '../constants/ActionTypes';

export function* fetchTags() {
  try {
    const data = yield call(fetchTagsRequest)
    yield put({type: FETCH_TAGS_SUCCESS, data})
  } catch (error) {
    console.error(error)
  }
}
