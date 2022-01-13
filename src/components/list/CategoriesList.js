import React, { useEffect, useState } from "react";

import { getCategories, deleteCategory } from "../../services/categoryService";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    getCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  };

  categories.forEach((c, i) => {
    categories[i]["no"] = i + 1;
  });

  return (
    <div className="row mt-2">
      <div className="col-md-12">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>No</th>
              <th>Kategori Adı</th>
              <th>Aksiyon</th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((c, i) => (
                <tr key={c._id}>
                  <td>{c?.no}</td>
                  <td>{c.name}</td>
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
                                await deleteCategory(c._id).then((res) => {
                                  toast.error("Kategori silindi");
                                  fetchCategories();
                                });
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
                      <Link to={`/admin/category/${c._id}`}>
                        <BiEdit style={{ fontSize: "22px", color: "green" }} />
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesList;
