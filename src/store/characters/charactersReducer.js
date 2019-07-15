import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_DONE,
  FETCH_CHARACTERS_ERROR
} from '../actions';
import { handlerDefaultCase } from '../storeHelpers';

export const initialState = {
  data: [],
  isLoading: false,
  paginationTotal: 0
};

function charactersReducer(state = initialState, action) {
  const handlers = {
    [FETCH_CHARACTERS_REQUEST]: () => ({
      ...state,
      isLoading: true
    }),
    [FETCH_CHARACTERS_DONE]: () => ({
      ...state,
      data: action.payload.results,
      paginationTotal: action.payload.info.count,
      isLoading: false
    }),
    [FETCH_CHARACTERS_ERROR]: () => ({
      ...state,
      isLoading: false
    })
  };

  return handlerDefaultCase(handlers, action, state);
}

export default charactersReducer;