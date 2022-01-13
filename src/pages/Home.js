import React, { useEffect } from "react";
import BookList from "./book/BookList";

const Home = ({ books }) => {
  return (
    <div className="row mt-3">
      <div className="col-md-12">
        <BookList books={books} />
      </div>
    </div>
  );
};

export default Home;
