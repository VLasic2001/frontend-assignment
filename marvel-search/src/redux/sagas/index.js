import { put, call, debounce } from "redux-saga/effects";
import { REPLACE_CHARACTERS } from "../constants/action-types/index.js";
import { replaceCharactersCall } from "../actions/index";

function* replaceCharactersAsync(action) {
  let characters = yield call(() => {
    return fetch(
      `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${action.searchInput}&limit=20&ts=1&apikey=58cc968ac4a6b192cb223b4a78a312f0&hash=054aa4102d88a21aa8eb760c2e6cc8fc`
    )
      .then(res => res.json())
      .then(result => result.data.results);
  });
  yield put(replaceCharactersCall(characters.length > 0 ? characters : null));
}

export function* debounceReplaceCharacters() {
  yield debounce(500, REPLACE_CHARACTERS, replaceCharactersAsync);
}
