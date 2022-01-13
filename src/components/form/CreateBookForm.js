import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { createBook } from "../../store/action/bookAction";
import { getCategories } from "../../services/categoryService";
import { toast } from "react-toastify";
const CreateBookForm = ({ history }) => {
  const [bookForm, setBookForm] = useState({
    title: "",
    author: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook(bookForm, toast, history));
  };
  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <input
          className="form-control"
          placeholder="Lütfen kitap adı giriniz..."
          value={bookForm.title}
          onChange={(e) => setBookForm({ ...bookForm, title: e.target.value })}
        />
      </div>
      <div className="form-group mb-2">
        <input
          className="form-control"
          placeholder="Lütfen yazarı giriniz..."
          value={bookForm.author}
          onChange={(e) => setBookForm({ ...bookForm, author: e.target.value })}
        />
      </div>
      <div className="form-group mb-2">
        <input
          type="number"
          className="form-control"
          placeholder="Lütfen fiyatı giriniz..."
          value={bookForm.price}
          onChange={(e) => setBookForm({ ...bookForm, price: e.target.value })}
        />
      </div>
      <div className="form-group mb-2">
        <input
          type="number"
          className="form-control"
          placeholder="Lütfen stok giriniz..."
          value={bookForm.stock}
          onChange={(e) => setBookForm({ ...bookForm, stock: e.target.value })}
        />
      </div>
      <div className="form-group mb-2">
        <FileBase64
          multiple={false}
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
          <option>Lütfen kategori seçiniz</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>
        <div className="form-group mt-2">
          <button type="submit" className="btn btn-primary btn-block">
            Ekle
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateBookForm;
