import React from "react";
import CreateCategoryForm from "../../components/form/CreateCategoryForm";

const CreateCategory = ({ history }) => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-8 offset-md-2">
          <h4 className="text-center">Kategori Ekle</h4>
          <CreateCategoryForm history={history} />
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
