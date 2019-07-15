import { put, takeEvery, call } from 'redux-saga/effects';
import API from '../../services';
import { fetchCharactersDone, fetchCharactersError } from '../actions';

export function* fetchCharactersSaga(apiCall, action) {
  try {
    const { data } = yield call(apiCall, action.payload);
    yield put(fetchCharactersDone(data));
  } catch(e) {
    yield put(fetchCharactersError(e));
  }
}

export function* watchCharactersSaga() {
  yield takeEvery('FETCH_CHARACTERS_REQUEST', fetchCharactersSaga, API.fetchCharacters)
}