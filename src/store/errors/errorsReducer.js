import uuidv4 from 'uuid/v4';
import { omit } from 'lodash-es';

import { handlerDefaultCase } from '../storeHelpers';
import { FETCH_CHARACTER_ERROR, FETCH_CHARACTERS_ERROR, REMOVE_ERROR } from '../actions';

const initialState = {};

function errorsReducer(state = initialState, action) {
  const id = uuidv4();
  const addNewError = () => ({
    ...state,
    [id]: {
      id,
      message: action.payload
    }
  });
  const handlers = {
    [FETCH_CHARACTER_ERROR]: addNewError,
    [FETCH_CHARACTERS_ERROR]: addNewError,
    [REMOVE_ERROR]: () => ({
      ...omit(state, action.payload)
    })
  };

  return handlerDefaultCase(handlers, action, state);
}

export default errorsReducer;