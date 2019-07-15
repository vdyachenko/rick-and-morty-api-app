// FETCH ONE CHARACTER

const FETCH_CHARACTER_REQUEST = 'FETCH_CHARACTER_REQUEST';
const FETCH_CHARACTER_DONE = 'FETCH_CHARACTER_DONE';
const FETCH_CHARACTER_ERROR = 'FETCH_CHARACTER_ERROR';

const fetchCharacter = (characterId) => ({
  type: FETCH_CHARACTER_REQUEST,
  payload: characterId
});

const fetchCharacterDone = (character) => ({
  type: FETCH_CHARACTER_DONE,
  payload: character
});

const fetchCharacterError = (error) => ({
  type: FETCH_CHARACTER_ERROR,
  payload: error
});

export {
  FETCH_CHARACTER_REQUEST,
  FETCH_CHARACTER_DONE,
  FETCH_CHARACTER_ERROR,
  fetchCharacter,
  fetchCharacterDone,
  fetchCharacterError
}