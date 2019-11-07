/*
 * PresentationReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */
import produce from 'immer';
import {
  ADD_SLIDE,
  REMOVE_SLIDE,
  ADD_TEXT,
  REMOVE_TEXT,
  ADD_DATA,
  CHANGE_SLIDE,
} from './constants';

// The initial state of the App
export const initialState = {
  DeckOfSlides: [
    {
      currentText: 0,
      textArray: [{ id: 0, data: "That's 0 Slide" }],
      imageArray: [],
    },
  ],
  currentSlide: 0,
};

/* eslint-disable default-case, no-param-reassign */
const PresentationReducer = (state = initialState, action) =>
  produce(state, draft => {
    console.log(
      'the current slide is: ',
      draft.currentSlide,
      'action : ',
      action,
    );
    switch (action.type) {
      case ADD_SLIDE:
        draft.DeckOfSlides.splice(draft.currentSlide + 1, 0, {
          currentText: 0,
          textArray: [
            { id: 0, data: `That's ${draft.currentSlide + 1} Slide` },
          ],
          imageArray: [],
        });
        break;
      case REMOVE_SLIDE:
        if (draft.currentSlide > 0) {
          draft.DeckOfSlides.splice(draft.currentSlide, 1);
        } else alert('Not possible to remove the only slide');
        break;
      case ADD_TEXT:
        draft.DeckOfSlides[draft.currentSlide].textArray.push({
          id: draft.DeckOfSlides[draft.currentSlide].currentText,
          data: "That's a new Text box",
        });
        draft.DeckOfSlides[draft.currentSlide].currentText += 1;
        break;
      case REMOVE_TEXT:
        if (draft.DeckOfSlides[draft.currentSlide].currentText >= 0) {
          draft.DeckOfSlides[draft.currentSlide].textArray.splice(
            draft.DeckOfSlides[draft.currentSlide].currentText,
            1,
          );
          draft.DeckOfSlides[draft.currentSlide].currentText -= 1;
        } else alert("There aren't any text to remove");
        break;
      case ADD_DATA:
        draft.DeckOfSlides[draft.currentSlide].textArray[
          draft.DeckOfSlides[draft.currentSlide].currentText
        ].data = action.data;
        break;
      case CHANGE_SLIDE:
        console.log(
          '--- change slide --- ',
          action.payload.location.hash.substr(2),
        );
        draft.currentSlide = Number(action.payload.location.hash.substr(2));
        break;
    }
  });

export default PresentationReducer;
