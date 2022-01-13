import React, { useEffect, useState } from "react";

import FileBase64 from "react-file-base64";
import { getCategories } from "../../services/categoryService";
import { useDispatch } from "react-redux";
import { updateBook } from "../../store/action/bookAction";
import { getBookById } from "../../services/common/bookService";
import { toast } from "react-toastify";
const UpdateBookForm = ({ match, history }) => {
  const [bookForm, setBookForm] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    stock: "",
    image: "",
  });
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
    return () => {
      setCategories([]);
    };
  }, []);
  useEffect(() => {
    getBookById(match.params.id)
      .then((res) => setBookForm(res.data))
      .catch((err) => console.log(err));
    return () => setBookForm([]);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(match.params.id, bookForm, toast, history));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <input
          className="form-control"
          onChange={(e) => setBookForm({ ...bookForm, title: e.target.value })}
          value={bookForm.title}
        />
      </div>
      <div className="form-group mb-2">
        <input
          className="form-control"
          onChange={(e) => setBookForm({ ...bookForm, author: e.target.value })}
          value={bookForm.author}
        />
      </div>
      <div className="form-group mb-2">
        <input
          type="number"
          className="form-control"
          onChange={(e) => setBookForm({ ...bookForm, price: e.target.value })}
          value={bookForm.price}
        />
      </div>
      <div className="form-group mb-2">
        <input
          type="number"
          className="form-control"
          onChange={(e) => setBookForm({ ...bookForm, stock: e.target.value })}
          value={bookForm.stock}
        />
      </div>
      <div className="form-group mb-2">
        <FileBase64
          multiple={false}
          value={bookForm.image}
          onDone={({ base64 }) => setBookForm({ ...bookForm, image: base64 })}
        />
      </div>
      <div className="form-group mb-2">
        <select
          name="category"
          className="form-control"
          onChange={(e) =>
            setBookForm({ ...bookForm, category: e.target.value })
          }
        >
          <option>Kategori seçiniz</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group mt-2">
        <button className="btn btn-success btn-block">Güncelle</button>
      </div>
    </form>
  );
};

export default UpdateBookForm;
