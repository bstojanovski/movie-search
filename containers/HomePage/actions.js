/*
 * Home Actions
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
  CHANGE_TITLE,
  CHANGE_PAGE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {title} title The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_TITLE
 */
export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    title,
  };
}


/**
 * Changes the page number
 *
 * @param  {title} page The new page number
 *
 * @return {object}    An action object with a type of CHANGE_PAGE
 */
export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    page,
  };
}
