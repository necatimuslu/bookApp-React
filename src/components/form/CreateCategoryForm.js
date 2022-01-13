import React, { useState } from "react";
import { toast } from "react-toastify";

import { createCategory } from "../../services/categoryService";
const CreateCategoryForm = ({ history }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory({ name })
      .then(() => {
        toast.success("Kategori eklendi");
        history.push("/admin");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <input
          type="text"
          placeholder="Lütfen kategori adı giriniz..."
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="form-control"
        />
      </div>
      <div className="form-group mb-2">
        <button type="submit" className="btn btn-primary btn-block">
          Ekle
        </button>
      </div>
    </form>
  );
};

export default CreateCategoryForm;
