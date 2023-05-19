import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import userReducer from "./userReducer";
import CompetitionReducer from "./CompetitionReducer";

import authReducer from "./authReducer";
export default combineReducers({
  Courses: courseReducer,
  UserReducer: userReducer,
  authReducer: authReducer,
  CompetitionReducer: CompetitionReducer,
});
