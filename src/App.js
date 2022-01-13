import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/nav/Header";
import AdminHome from "./pages/admin/AdminHome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateCategory from "./pages/admin/CreateCategory";
import UpdateCategory from "./pages/admin/UpdateCategory";
import CreateBook from "./pages/admin/CreateBook";
import UpdateBook from "./pages/admin/UpdateBook";
import CategoryBookDetail from "./pages/category/CategoryBookDetail";
import BookDetail from "./pages/book/BookDetail";
function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/category/:id" component={CategoryBookDetail} exact />
        <Route path="/book/:id" component={BookDetail} exact />
        <Route path="/admin" component={AdminHome} exact />
        <Route path="/admin/category" component={CreateCategory} exact />
        <Route path="/admin/category/:id" component={UpdateCategory} exact />
        <Route path="/admin/book" component={CreateBook} exact />
        <Route path="/admin/book/:id" component={UpdateBook} exact />
      </Switch>
    </>
  );
}

export default App;
