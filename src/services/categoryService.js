import axios from "axios";
import { baseUrl } from "./common/baseUrl";

export const getCategories = async () => await axios.get(`${baseUrl}/category`);

export const getCategoryById = async (id) =>
  await axios.get(`${baseUrl}/category/${id}`);

export const getBookCategoryId = async (id) =>
  await axios.get(`${baseUrl}/category/book/${id}`);

export const createCategory = async (categoryForm) =>
  await axios.post(`${baseUrl}/category`, categoryForm);

export const updateCategory = async (id, categoryForm) =>
  await axios.put(`${baseUrl}/category/${id}`, categoryForm);

export const deleteCategory = async (id) =>
  await axios.delete(`${baseUrl}/category/${id}`);
