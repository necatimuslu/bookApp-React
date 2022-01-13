import React from "react";
import UpdateCategoryForm from "../../components/form/UpdateCategoryForm";

const UpdateCategory = ({ match, history }) => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-8 offset-md-2">
          <h4 className="text-center">Kategori Güncelle</h4>
          <UpdateCategoryForm match={match} history={history} />
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
