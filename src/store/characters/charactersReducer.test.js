import React from 'react';

import charactersReducer, { initialState as state } from './charactersReducer';
import { FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_ERROR, FETCH_CHARACTERS_DONE } from './charactersActions';

describe('charactersReducer', () => {
  it(`${FETCH_CHARACTERS_REQUEST}`, () => {
    const action = {
      type: FETCH_CHARACTERS_REQUEST
    };
    const expected = {
      ...state,
      isLoading: true
    };
    const actual = charactersReducer(state, action);
    expect(actual).toEqual(expected);
  });
  it(`${FETCH_CHARACTERS_ERROR}`, () => {
    const action = {
      type: FETCH_CHARACTERS_ERROR,
      payload: 'Some error'
    };
    const expected = {
      ...state,
      isLoading: false
    };
    const actual = charactersReducer(state, action);
    expect(actual).toEqual(expected);
  });
  it(`${FETCH_CHARACTERS_DONE}`, () => {
    const data = [
      {
        id: '1',
        name: 'Test 1'
      },
      {
        id: '2',
        name: 'Test 2'
      }
    ];
    const action = {
      type: FETCH_CHARACTERS_DONE,
      payload: {
        results: data,
        info: {
          count: 2
        }
      }
    };
    const expected = {
      ...state,
      isLoading: false,
      data,
      paginationTotal: 2
    };
    const actual = charactersReducer(state, action);
    expect(actual).toEqual(expected);
  });
});