import { USER_ESTABLISH, USER_REMOVE } from "../actions";
import { combineReducers } from "redux";

const user = (state = {}, action) => {
  switch (action.type) {
    case USER_ESTABLISH: {
      return {
        ...state,
        user_uid: action.id,
        user_name: action.name,
        user_email: action.email
      };
    }
    case USER_REMOVE: {
      return {
        ...state,
        user_uid: action.id,
        user_name: action.name,
        user_email: action.email
      };
    }
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  user
});

export default rootReducer;
