import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getCategories } from "../../services/categoryService";
import { AiOutlineOrderedList } from "react-icons/ai";
import { SiAircanada } from "react-icons/si";
import { getBookCategoryId } from "../../services/categoryService";
const CategoryMenuList = ({ setBooks }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <nav className="mt-3">
      <div className="card">
        <div
          className="card-header"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          <AiOutlineOrderedList style={{ fontSize: "24px" }} className="mr-2" />
          Kategoriler
        </div>
        <div className="card-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              {categories.map((c) => (
                <Link
                  key={c._id}
                  className="nav-link"
                  to={`/category/${c._id}`}
                  className="btn btn-outline-light btn-block text-dark "
                  onClick={() => {
                    getBookCategoryId(c._id)
                      .then((res) => setBooks(res.data))
                      .catch((err) => console.log(err));
                  }}
                >
                  <SiAircanada className="mr-2" style={{ fontSize: "18px" }} />
                  {c.name}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CategoryMenuList;
