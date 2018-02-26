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
  CHANGE_TITLE,
  CHANGE_PAGE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  title: '',
  page: 1,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return state
      .set('title', action.title);
    case CHANGE_PAGE:
      return state
      .set('page', action.page);
    default:
      return state;
  }
}

export default homeReducer;
