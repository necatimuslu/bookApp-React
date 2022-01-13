import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  getCategoryById,
  updateCategory,
} from "../../services/categoryService";
const UpdateCategoryForm = ({ match, history }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    getCategoryById(match.params.id)
      .then((res) => setName(res.data.name))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateCategory(match.params.id, { name })
      .then((res) => {
        toast.warn("Kategori güncellendi");
        history.push("/admin");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="form-group mb-2">
        <button type="submit" className="btn btn-success btn-block">
          Güncelle
        </button>
      </div>
    </form>
  );
};

export default UpdateCategoryForm;
