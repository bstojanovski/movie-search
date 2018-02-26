/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectTitle = () => createSelector(
  selectHome,
  (homeState) => homeState.get('title')
);

const makeSelectPage = () => createSelector(
  selectHome,
  (homeState) => homeState.get('page')
);

export {
  selectHome,
  makeSelectTitle,
  makeSelectPage,
};
