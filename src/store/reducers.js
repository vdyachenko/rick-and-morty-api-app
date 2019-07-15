import { combineReducers } from 'redux';

import charactersReducer from './characters/charactersReducer';
import characterReducer from './character/characterReducer';
import errorsReducer from './errors/errorsReducer';


export default combineReducers({
  characters: charactersReducer,
  character: characterReducer,
  errors: errorsReducer
})