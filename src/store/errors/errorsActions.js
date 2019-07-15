
const REMOVE_ERROR = 'REMOVE_ERROR';

const removeError = (errorId) => ({
  type: REMOVE_ERROR,
  payload: errorId
});

export {
  REMOVE_ERROR,
  removeError
}