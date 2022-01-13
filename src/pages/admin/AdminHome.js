import React from "react";
import { Link } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoriesList from "../../components/list/CategoriesList";
import { MdOutlineAddCircle } from "react-icons/md";
import BooksList from "../../components/list/BooksList";
const AdminHome = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-12">
          <Tabs>
            <TabList>
              <Tab>Kategoriler</Tab>
              <Tab>Kitaplar </Tab>
            </TabList>

            <TabPanel>
              <Link
                className="btn btn-outline-light text-dark"
                to="/admin/category"
              >
                <MdOutlineAddCircle
                  style={{ fontSize: "22px" }}
                  className="mr-2"
                />
                Kategori Ekle
              </Link>
              <CategoriesList />
            </TabPanel>
            <TabPanel>
              <Link
                className="btn btn-outline-light text-dark mb-2"
                to="/admin/book"
              >
                <MdOutlineAddCircle
                  style={{ fontSize: "22px" }}
                  className="mr-2"
                />
                Kitap Ekle
              </Link>
              <BooksList />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
