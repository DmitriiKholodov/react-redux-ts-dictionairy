import { CHANGE_TITLE } from "../actions/actionTypes";
const initialState = {
  title: "click me"
};
function rootReducer(state = initialState, action: any) {
  if (action.type === CHANGE_TITLE) {
    return action.payload
  }
  return state;
}
export default rootReducer;