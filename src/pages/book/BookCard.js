import React from "react";

import { AiOutlineFolderView } from "react-icons/ai";
import { Link } from "react-router-dom";
const BookCard = ({ b }) => {
  return (
    <div className="card mt-2 mb-3 ml-2 mr-2" style={{ height: "670px" }}>
      <div className="card-header">
        <h3>{b.title}</h3>
        <div className="card-image">
          <img
            style={{ width: "230px", height: "350px" }}
            src={b && b.image}
            className="img-fluid"
          />
        </div>
      </div>
      <div className="card-body">
        <p>
          Yazar :<strong>{b.author}</strong>
        </p>
        <p>
          Fiyat :<strong>{b.price} TL</strong>
        </p>
        <p>
          Kategori :<strong>{b.category?.name}</strong>
        </p>
      </div>
      <div className="card-footer">
        <div className="text-center">
          Kitap Detay
          <Link to={`/book/${b._id}`}>
            <AiOutlineFolderView style={{ fontSize: "30px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
