import React, { useEffect, useState } from "react";
import { getBookById } from "../../services/common/bookService";
import CategoryMenuList from "../category/CategoryMenuList";

const BookDetail = ({ match }) => {
  const [book, setBook] = useState({});

  useEffect(() => {
    getBookById(match.params.id)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-3">
          <CategoryMenuList />
        </div>
        <div className="col-md-9">
          <div className="row mt-3">
            <div className="col-md-6">
              <img className="img-fluid" src={book.image} />
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="text-center">{book.title}</h3>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <span class="book-detail-text">Yazar: </span>
                      <strong class="ml-4 text-success">{book.author}</strong>
                    </li>
                    <li className="list-group-item">
                      <span class="book-detail-text">Fiyat: </span>
                      <strong class="ml-4 text-secondary">{book.price}</strong>
                    </li>
                    <li className="list-group-item">
                      <span class="book-detail-text">Stok: </span>
                      <strong class="ml-4 text-danger">{book.stock}</strong>
                    </li>
                    <li className="list-group-item">
                      <span class="book-detail-text">Kategori: </span>
                      <strong class="ml-4 text-info">
                        {book.category?.name}
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
