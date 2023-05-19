import {
  CREATE_Admin,
  CREATE_USER,
  DELETE_Admin,
  DELETE_USER,
  GET_ALL_Admins,
  GET_ALL_USERS,
} from "../type";

const inital = {
  loading: true,
  user: [],
  admin: [],
  allUsers: [],
  allAdmins: [],
  updateUsers: [],
  deleteUser: [],
  deleteAdmin: [],
};
const userReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CREATE_Admin:
      return {
        ...state,
        admin: action.payload,
        loading: false,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        loading: true,
        allUsers: action.payload,
      };
    case GET_ALL_Admins:
      return {
        ...state,
        loading: true,
        allAdmins: action.payload,
      };
    case DELETE_Admin:
      return {
        ...state,
        loading: true,
        deleteAdmin: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        loading: true,
        deleteUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
