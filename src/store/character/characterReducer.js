import {
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_DONE,
  FETCH_CHARACTER_ERROR
} from '../actions';
import { handlerDefaultCase } from '../storeHelpers';

const initialState = {
  data: {},
  isLoading: false
};

function characterReducer(state = initialState, action) {
  const handlers = {
    [FETCH_CHARACTER_REQUEST]: () => ({
      ...state,
      isLoading: true
    }),
    [FETCH_CHARACTER_DONE]: () => ({
      ...state,
      data: action.payload,
      isLoading: false
    }),
    [FETCH_CHARACTER_ERROR]: () => ({
      ...state,
      isLoading: false
    })
  };

  return handlerDefaultCase(handlers, action, state);
}

export default characterReducer;