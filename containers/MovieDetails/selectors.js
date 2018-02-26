import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectImdb = () => createSelector(
  selectHome,
  (homeState) => homeState.get('imdb')
);

export {
  selectHome,
  makeSelectImdb,
};
