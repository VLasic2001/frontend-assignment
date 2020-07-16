import {
  REPLACE_CHARACTERS,
  REPLACE_CHARACTERS_SUCCESS
} from "../constants/action-types/index.js";

export const replaceCharacters = searchInput => {
  return { type: REPLACE_CHARACTERS, searchInput };
};
export const replaceCharactersCall = payload => {
  return { type: REPLACE_CHARACTERS_SUCCESS, payload };
};
