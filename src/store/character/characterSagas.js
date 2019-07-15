import { put, takeEvery, call } from 'redux-saga/effects';
import { last, get } from 'lodash-es';

import API from '../../services';
import { fetchCharacterDone, fetchCharacterError } from '../actions';
import { navigateTo } from '../storeHelpers';

export function* fetchCharacterSaga(apiCall, action) {
  try {
    const { data } = yield call(apiCall, action.payload);
    const episodesIds = data.episode.map(episode => Number(last(episode.split('/'))));
    const result = yield API.fetchEpisodes(episodesIds);
    const episodes = Array.isArray(result.data) ? result.data : [result.data];
    const characterData = {
      ...data,
      episode: episodes.map(({ id, name, air_date }) => ({
        id,
        name,
        airDate: air_date
      }))
    };
    yield put(fetchCharacterDone(characterData));
  } catch(e) {
    const error = get(e, 'response.data.error') || e.message;
    yield call(navigateTo, '/');
    yield put(fetchCharacterError(error));
  }
}

export function* watchCharacterSaga() {
  yield takeEvery('FETCH_CHARACTER_REQUEST', fetchCharacterSaga, API.fetchCharacter)
}