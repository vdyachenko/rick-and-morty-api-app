import React from 'react';
import { runSaga } from 'redux-saga';

import { fetchCharactersSaga } from './charactersSagas';
import { fetchCharacters, fetchCharactersDone, fetchCharactersError } from './charactersActions';

export async function recordSaga(saga, initialAction) {
  const dispatched = [];

  await runSaga(
    {
        dispatch: (action) => dispatched.push(action)
    },
    saga,
    ...initialAction
  ).toPromise();

  return dispatched;
}

describe('fetchCharactersSaga', () => {
  const apiCall = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('Call the API and dispatch success action', async () => {
    const result = {
      data: {
        results: []
      }
    };
    const initPage = 1;
    apiCall.mockImplementation(() => result);
    const dispatched = await recordSaga(
      fetchCharactersSaga,
      [apiCall, fetchCharacters(initPage)]
    );

    expect(apiCall).toHaveBeenCalledWith(initPage);
    expect(dispatched).toContainEqual(fetchCharactersDone(result.data));
  });

  it('Call the API and dispatch error action', async () => {
    const error = 'error!';
    const initPage = 1;
    apiCall.mockImplementation(() => { throw new Error(error) });
    const dispatched = await recordSaga(
      fetchCharactersSaga,
      [apiCall, fetchCharacters(initPage)]
    );

    expect(apiCall).toHaveBeenCalledWith(initPage);
    expect(dispatched).toContainEqual(fetchCharactersError(new Error(error)));
  });
});