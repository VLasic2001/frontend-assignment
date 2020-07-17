import { put, call, debounce } from "redux-saga/effects";
import { REPLACE_CHARACTERS } from "../constants/action-types/index.js";
import { replaceCharactersCall } from "../actions/index";

function* replaceCharactersAsync(action) {
  if (action.payload.searchInput === "") {
    yield put(replaceCharactersCall([]));
    return;
  }
  let characters = [];
  let total = 0;
  yield call(() => {
    return fetch(
      `http://gateway.marvel.com/v1/public/characters?offset=${
        (action.payload.page - 1) * 20
      }&nameStartsWith=${
        action.payload.searchInput
      }&limit=20&ts=1&apikey=58cc968ac4a6b192cb223b4a78a312f0&hash=054aa4102d88a21aa8eb760c2e6cc8fc`
    )
      .then((res) => res.json())
      .then((result) => {
        characters = result.data.results;
        total = result.data.total;
      })
      .catch((e) => {});
  });
  yield put(
    replaceCharactersCall({
      characters: characters.length > 0 ? characters : null,
      total,
    })
  );
}

export function* debounceReplaceCharacters() {
  yield debounce(500, REPLACE_CHARACTERS, replaceCharactersAsync);
}
