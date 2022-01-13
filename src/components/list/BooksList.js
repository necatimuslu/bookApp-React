import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../store/action/bookAction";
import { getAllBooks } from "../../services/common/bookService";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const BooksList = () => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = () => {
    getAllBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };
  books.forEach((book, i) => {
    books[i]["no"] = i + 1;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr>
                <th>No</th>
                <th>Kitap adı</th>
                <th>Yazar</th>
                <th>Fiyat</th>
                <th>Stok Miktarı</th>
                <th>Resim</th>
                <th>Kategori</th>
                <td>Aksiyon</td>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.map((b) => (
                  <tr key={b._id}>
                    <td>{b.no}</td>
                    <td>{b.title}</td>
                    <td>{b.author}</td>
                    <td>{`${b.price} TL`}</td>
                    <td>{b.stock}</td>
                    <td>
                      <img src={b.image} style={{ height: "100px" }} />
                    </td>
                    <td>{b?.category?.name}</td>
                    <td className="text-center">
                      <RiDeleteBin3Fill
                        className="mr-2"
                        onClick={async () => {
                          confirmAlert({
                            title: "Silme işlemi",
                            message:
                              "Seçilen kategorinin silinmesinden emin misiniz?",
                            buttons: [
                              {
                                label: "Evet",
                                onClick: async () => {
                                  dispatch(deleteBook(b._id, toast));
                                  await fetchBooks();
                                },
                              },
                              {
                                label: "Hayır",
                                onClick: () => null,
                              },
                            ],
                          });
                        }}
                        style={{
                          fontSize: "22px",
                          color: "red",
                          cursor: "pointer",
                        }}
                      />
                      <button className="btn bt-outline-light">
                        <Link to={`/admin/book/${b._id}`}>
                          <BiEdit
                            style={{ fontSize: "22px", color: "green" }}
                          />
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
