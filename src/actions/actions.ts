import { CHANGE_TITLE } from "./actionTypes";

export function changeTitle(payload: object) {
  return { type: CHANGE_TITLE, payload }
}
