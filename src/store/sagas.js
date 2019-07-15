import { all } from 'redux-saga/effects';
import { watchCharactersSaga } from './characters/charactersSagas';
import { watchCharacterSaga } from './character/characterSagas';

export default function* rootSaga() {
  yield all([
    watchCharactersSaga(),
    watchCharacterSaga()
  ]);
}
