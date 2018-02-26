/**
 * Gets the movies
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_MOVIES, LOAD_SINGLE_MOVIE } from 'containers/App/constants';
import { moviesLoaded, movieLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectTitle, makeSelectPage } from 'containers/HomePage/selectors';
import { makeSelectImdb } from 'containers/MovieDetails/selectors';

/**
 * OMDb movies request/response handler
 */
export function* getMovies() {
  // Select title from store
  const title = yield select(makeSelectTitle());
  const page = yield select(makeSelectPage());
  const requestURL = `http://www.omdbapi.com/?s=${title}&page=${page}&apikey=39110782`;

  if({title} != '') {
    try {
      // Call our request helper (see 'utils/request')
      const movies = yield call(request, requestURL);
      yield put(moviesLoaded(movies, title));
    } catch (err) {
      yield put(movieLoadingError(err));
    }
  }
}

/**
 * OMDb single movie request/response handler
 */
export function* getSingleMovie() {
  // Select title from store
  const imdb = yield select(makeSelectImdb());
  const requestURL = `http://www.omdbapi.com/?i=${imdb}&apikey=39110782`;

  try {
    // Call our request helper (see 'utils/request')
    const movie = yield call(request, requestURL);
    yield put(moviesLoaded(movie, imdb));
  } catch (err) {
    yield put(movieLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* omdbData() {
  // Watches for LOAD_MOVIES actions and calls getMovies when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_MOVIES, getMovies);
  yield takeLatest(LOAD_SINGLE_MOVIE, getSingleMovie);
}
