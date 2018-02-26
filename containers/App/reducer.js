/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES,
  LOAD_SINGLE_MOVIE,
  LOAD_MOVIES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentTitle: false,
  currentPage: false,
  imdb: false,
  titleData: {
    movies: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['titleData', 'movies'], false);
    case LOAD_SINGLE_MOVIE:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['titleData', 'movie'], false);
    case LOAD_MOVIES_SUCCESS:
      return state
        .setIn(['titleData', 'movies'], action.movies)
        .set('loading', false)
        .set('currentTitle', action.title)
        .set('currentPage', action.page)
        .set('imdb', action.imdb);
    case LOAD_MOVIES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
