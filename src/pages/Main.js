import React from "react";
import CategoryMenuList from "./category/CategoryMenuList";
import Home from "./Home";

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <CategoryMenuList />
        </div>
        <div className="col-md-9">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Main;
