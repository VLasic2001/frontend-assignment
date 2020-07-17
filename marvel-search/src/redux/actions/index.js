import {
  REPLACE_CHARACTERS,
  REPLACE_CHARACTERS_SUCCESS
} from "../constants/action-types/index.js";

export const replaceCharacters = payload => {
  return { type: REPLACE_CHARACTERS, payload };
};
export const replaceCharactersCall = payload => {
  return { type: REPLACE_CHARACTERS_SUCCESS, payload };
};
