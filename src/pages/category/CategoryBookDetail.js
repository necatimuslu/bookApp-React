import React, { useState, useEffect } from "react";

import Home from "../Home";
import CategoryMenuList from "./CategoryMenuList";
import { getAllBooks } from "../../services/common/bookService";
const CategoryBookDetail = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchAllBooks();
  }, []);
  const fetchAllBooks = () => {
    getAllBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

  console.log(books);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <CategoryMenuList setBooks={setBooks} />
        </div>
        <div className="col-md-9">
          <Home books={books} />
        </div>
      </div>
    </div>
  );
};

export default CategoryBookDetail;
