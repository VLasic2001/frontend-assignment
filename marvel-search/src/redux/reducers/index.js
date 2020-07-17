import {
  REPLACE_CHARACTERS,
  REPLACE_CHARACTERS_SUCCESS
} from "../constants/action-types/index.js";

const initialState = {
  searchCharacters: [],
  loading: false
};

function rootReducer(state = initialState, action) {
  console.log("r", action);
  switch (action.type) {
    case REPLACE_CHARACTERS:
      state.loading = true;
      break;
    case REPLACE_CHARACTERS_SUCCESS:
      state.searchCharacters = action.payload;
      state.loading = false;
      break;
  }
  return state;
}

export default rootReducer;
