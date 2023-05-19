import {
  CREATE_Competition,
  DELETE_Competition,
  GET_ALL_Competitions,
  Get_Error,
} from "../type";

const inital = {
  Competitions: [],
  deleteCompetition: [],
  loading: true,
};

const CompetitionReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_Competition:
      return {
        Competitions: action.payload,
        loading: false,
      };
    case GET_ALL_Competitions:
      return {
        ...state,
        Competitions: action.payload,
        loading: false,
      };

    case DELETE_Competition:
      return {
        deleteCompetition: action.payload,
        loading: false,
      };
    case Get_Error:
      return {
        loading: true,
        Competitions: action.payload,
      };

    default:
      return state;
  }
};

export default CompetitionReducer;
