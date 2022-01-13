import React from "react";
import CreateBookForm from "../../components/form/CreateBookForm";

const CreateBook = ({ history }) => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-8 offset-md-2">
          <h4 className="text-center">Kitap ekle</h4>
          <CreateBookForm history={history} />
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
