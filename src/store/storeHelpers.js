import history from '../services/history';

const handlerDefaultCase = (handlers, action, state) =>
  handlers[action.type] ? handlers[action.type]() : state;

const navigateTo = (pathname) => {
  const path = pathname || history.location.pathname;
  history.push({
    pathname: path
  });
};

export {
  navigateTo,
  handlerDefaultCase
};