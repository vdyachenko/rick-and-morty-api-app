const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
const FETCH_CHARACTERS_DONE = 'FETCH_CHARACTERS_DONE';
const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

const fetchCharacters = (page) => ({
  type: FETCH_CHARACTERS_REQUEST,
  payload: page
});

const fetchCharactersDone = (characters) => ({
  type: FETCH_CHARACTERS_DONE,
  payload: characters
});

const fetchCharactersError = (error) => ({
  type: FETCH_CHARACTERS_ERROR,
  payload: error
});

export {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_DONE,
  FETCH_CHARACTERS_ERROR,
  fetchCharacters,
  fetchCharactersDone,
  fetchCharactersError
}