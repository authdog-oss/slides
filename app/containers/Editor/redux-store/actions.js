/*
 * Presentation Actions
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
  ADD_SLIDE,
  REMOVE_SLIDE,
  ADD_TEXT,
  REMOVE_TEXT,
  ADD_DATA,
  CHANGE_POSITION,
  CHANGE_SLIDE,
  SET_THEME,
  TOGGLE_EDIT_MODE,
  SET_TITLE,
  SET_DESCRIPTION,
  ADD_IMAGE,
  IMAGE_UPLOAD_REQUEST,
} from './constants';

/**
 * Adds a New Slide
 *
 * @return {object} An action object with a type of ADD_SLIDE
 */
export function addSlide() {
  return {
    type: ADD_SLIDE,
  };
}

/**
 * Removes a Slide
 *
 * @return {object} An action object with a type of REMOVE_SLIDE
 */
export function removeSlide() {
  return {
    type: REMOVE_SLIDE,
  };
}

/**
 * Adds text to slide
 *
 *
 * @return {object} An action object with a type of ADD_TEXT
 */
export function addText() {
  return {
    type: ADD_TEXT,
  };
}

/**
 * Removes text to slide
 *
 * @return {object} An action object with a type of REMOVE_TEXT
 */
export function removeText() {
  return {
    type: REMOVE_TEXT,
  };
}

/**
 * Adds text to slide
 * @param  {number} id
 * @param  {string} data
 *
 * @return {object} An action object with a type of ADD_DATA
 */
export function addData(id, data) {
  return {
    type: ADD_DATA,
    id,
    data,
  };
}

/**
 * Changes position to slide
 * @param  {number} id
 * @param  {object} position
 *
 * @return {object} An action object with a type of CHANGE_POSITION
 */
export function changePosition(id, position) {
  return {
    type: CHANGE_POSITION,
    id,
    position,
  };
}

/**
 * Changes slide
 * @param  {string} direction
 *
 * @return {object} An action object with a type of CHANGE_SLIDE
 */

export function changeSlide(direction) {
  return {
    type: CHANGE_SLIDE,
    direction,
  };
}

/**
 * Changes theme
 * @param  {string} theme
 *
 * @return {object} An action object with a type of SET_THEME
 */

export function setTheme(theme) {
  return {
    type: SET_THEME,
    theme,
  };
}

/**
 * Toggles edit mode
 *
 * @return {object} An action object with a type of TOGGLE_EDIT_MODE
 */

export function toggleEditMode(id, edit) {
  return {
    type: TOGGLE_EDIT_MODE,
    id,
    edit,
  };
}

export function setTitle(title) {
  return {
    type: SET_TITLE,
    title,
  };
}

export function setDescription(description) {
  return {
    type: SET_DESCRIPTION,
    description,
  };
}

export function addImage(src) {
  return {
    type: ADD_IMAGE,
    src,
  };
}

export function uploadImageRequest(request) {
  return {
    type: IMAGE_UPLOAD_REQUEST,
    request,
  };
}