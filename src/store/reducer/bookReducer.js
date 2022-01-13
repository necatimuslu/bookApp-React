import {
  GETL_ALL_BOOKS,
  CREATE_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
} from "../constants/bookConstants";

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case GETL_ALL_BOOKS:
      return action.payload;
    case CREATE_BOOK:
      return [...state, action.payload];
    case UPDATE_BOOK:
      return state.map((b) =>
        b._id === action.payload._id ? action.payload : b
      );
    case DELETE_BOOK:
      return state.filter((b) => b._id !== action.payload);
    default:
      return state;
  }
};
