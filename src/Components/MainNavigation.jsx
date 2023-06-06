import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/auth";
import { RoutePaths } from "../Utils/enum"

import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import User from "../pages/user/user";
import EditUser from "../pages/user/editUser/editUser";
import Category from "../pages/category/category";
import EditCategory from "../pages/category/editCategory/editCategory";
import Book from "../pages/book/book";
import EditBook from "../pages/book/editBook/editBook";
import BookList from "../pages/book-listing/BookListing";
import Cart from "../pages/cart/Cart";
import UpdateProfile from "../pages/update-profile/updateProfile";

const AppRoutes = () => {
  const authContext = useAuthContext();

  const Redirect = <Navigate to={RoutePaths.Login} />;

  return (
    <Routes>
      <Route exact path={RoutePaths.Login} element={<Login />} />
      <Route
        exact
        path={RoutePaths.Register}
        element={!authContext.user.id ? <Register /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.BookListing}
        element={authContext.user.id ? <BookList /> : Redirect}
      />

      <Route
        exact
        path={RoutePaths.User}
        element={authContext.user.id ? <User /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditUser}
        element={authContext.user.id ? <EditUser /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.Category}
        element={authContext.user.id ? <Category /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditCategory}
        element={authContext.user.id ? <EditCategory /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.AddCategory}
        element={authContext.user.id ? <EditCategory /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.Book}
        element={authContext.user.id ? <Book /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.AddBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />

      <Route
        exact
        path={RoutePaths.Cart}
        element={authContext.user.id ? <Cart /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.UpdateProfile}
        element={authContext.user.id ? <UpdateProfile /> : Redirect}
      />
    </Routes>
  );
};

export default AppRoutes;