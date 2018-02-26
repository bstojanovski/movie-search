/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectCurrentTitle = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentTitle')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectMovies = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['titleData', 'movies'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectCurrentTitle,
  makeSelectLoading,
  makeSelectError,
  makeSelectMovies,
  makeSelectLocation,
};
