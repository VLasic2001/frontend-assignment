import {
  REPLACE_CHARACTERS,
  REPLACE_CHARACTERS_SUCCESS,
} from "../constants/action-types/index.js";

const initialState = {
  searchCharacters: [],
  total: 0,
  loading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REPLACE_CHARACTERS:
      state.loading = true;
      break;
    case REPLACE_CHARACTERS_SUCCESS:
      if (action.payload.characters === undefined) {
        state.searchCharacters = [];
      } else state.searchCharacters = action.payload.characters;
      state.total =
        action.payload.total !== undefined ? action.payload.total : 0;
      state.loading = false;
      break;
    default:
      return state;
  }
  return state;
}

export default rootReducer;
