import {
  GETL_ALL_BOOKS,
  CREATE_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
} from "../constants/bookConstants";

import * as api from "../../services/common/bookService";

export const fetchAllBooks = () => async (dispatch) => {
  const { data } = await api.getAllBooks();

  dispatch({
    type: GETL_ALL_BOOKS,
    payload: data,
  });
};

export const createBook = (bookForm, toast, history) => async (dispatch) => {
  const { data } = await api.createBook(bookForm);

  dispatch({
    type: CREATE_BOOK,
    payload: data,
  });
  toast.success("Kitap eklendi");
  history.push("/admin");
};

export const updateBook =
  (id, bookForm, toast, history) => async (dispatch) => {
    const { data } = await api.updateBook(id, bookForm);

    dispatch({
      type: UPDATE_BOOK,
      payload: data,
    });
    toast.warn("Kitap güncellendi");
    history.push("/admin");
  };

export const deleteBook = (id, toast) => async (dispatch) => {
  await api.deleteBook(id);

  dispatch({
    type: DELETE_BOOK,
    payload: id,
  });
  toast.error("Kitap silindi");
};
