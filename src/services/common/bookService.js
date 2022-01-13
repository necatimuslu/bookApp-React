import axios from "axios";
import { baseUrl } from "./baseUrl";

export const getAllBooks = async () => await axios.get(`${baseUrl}/book`);

export const getBookById = async (id) =>
  await axios.get(`${baseUrl}/book/${id}`);

export const createBook = async (bookForm) =>
  await axios.post(`${baseUrl}/react`, bookForm);

export const updateBook = async (id, bookForm) =>
  await axios.put(`${baseUrl}/react/${id}`, bookForm);

export const deleteBook = async (id) =>
  await axios.delete(`${baseUrl}/book/${id}`);
