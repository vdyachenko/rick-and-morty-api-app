import { createSelector } from 'reselect';

const getCharactersData = (state) => state.characters;

const isCharactersListLoading = createSelector(
  getCharactersData,
  (data) => data.isLoading
);

const getCharacters = createSelector(
  getCharactersData,
  (data) => data.data
);

const getPaginationTotal = createSelector(
  getCharactersData,
  (data) => data.paginationTotal
);

export {
  getCharacters,
  isCharactersListLoading,
  getPaginationTotal
};