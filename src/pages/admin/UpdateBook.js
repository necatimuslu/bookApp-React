import React from "react";
import UpdateBookForm from "../../components/form/UpdateBookForm";

const UpdateBook = ({ match, history }) => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-8 offset-md-2">
          <h4 className="text-center">Kitap güncelle</h4>
          <UpdateBookForm match={match} history={history} />
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
