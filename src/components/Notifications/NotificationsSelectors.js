import { createSelector } from'reselect';

const getErrors = state => state.errors;

const getErrorsList = createSelector(
  getErrors,
  (errors) => Object.values(errors)
);

export {
  getErrorsList
}