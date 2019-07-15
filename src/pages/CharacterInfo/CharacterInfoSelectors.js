import { createSelector } from 'reselect';
import { isEmpty } from 'lodash-es';

const getCharacterData = (state) => state.character;

const isCharacterInfoLoading = createSelector(
  getCharacterData,
  (data) => data.isLoading
);

const getCharacterInfo = createSelector(
  getCharacterData,
  (character) => {
    if (isEmpty(character.data)) {
      return {};
    }
    return {
      ...character.data
    }
  }
);

export {
  getCharacterInfo,
  isCharacterInfoLoading
};