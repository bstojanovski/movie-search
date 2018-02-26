/*
 * HomeReducer
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
  CHANGE_IMDB,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  imdb: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_IMDB:
      return state
      .set('imdb', action.imdb);
    default:
      return state;
  }
}

export default homeReducer;
