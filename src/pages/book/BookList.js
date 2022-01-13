import React, { useEffect } from "react";

import BookCard from "./BookCard";
const BookList = ({ books }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="text-center">Kitap Listesi</h3>
      </div>
      <div className="row">
        {books &&
          books.map((b) => (
            <div className="col-md-4" key={b._id}>
              <BookCard b={b} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookList;
