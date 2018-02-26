/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_MOVIES,
  LOAD_SINGLE_MOVIE,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from './constants';

/**
 * Load the movies, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_MOVIES
 */
export function loadMovies() {
  return {
    type: LOAD_MOVIES,
  };
}


export function loadSingleMovie() {
  return {
    type: LOAD_SINGLE_MOVIE,
  };
}

/**
 * Dispatched when the movies are loaded by the request saga
 *
 * @param  {array} movies The movies data
 * @param  {string} title The current title
 * @param  {string} page The current page
 *
 * @return {object}      An action object with a type of LOAD_MOVIES_SUCCESS passing the movies
 */
export function moviesLoaded(movies, title, page, imdb) {
  return {
    type: LOAD_MOVIES_SUCCESS,
    movies,
    title,
    page,
    imdb,
  };
}

/**
 * Dispatched when loading the movies fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_MOVIES_ERROR passing the error
 */
export function movieLoadingError(error) {
  return {
    type: LOAD_MOVIES_ERROR,
    error,
  };
}
