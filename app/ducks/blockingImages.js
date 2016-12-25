const ADD_BLOCKING_IMAGE = 'blockingImages/ADD_BLOCKING_IMAGE';
const REMOVE_BLOCKING_IMAGE = 'blockingImages/REMOVE_BLOCKING_IMAGE';

export function addBlockingImage(src) {
  return {
    type: ADD_BLOCKING_IMAGE,
    src,
  };
}

export function removeBlockingImage(src) {
  return {
    type: REMOVE_BLOCKING_IMAGE,
    src,
  };
}

export function blockingImages(state = [], action) {
  switch (action.type) {
    case ADD_BLOCKING_IMAGE:
      return [...state, action.src];
    case REMOVE_BLOCKING_IMAGE:
      return state.filter(src => src !== action.src);
    default:
      return state;
  }
}
