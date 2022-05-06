import React, { useEffect } from "react";
import {BrowserRouter, Routes,Route, Link, Outlet} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const dispatch = useDispatch();
  const { currentUser } = userstate;
  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  });
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h1 style={{ fontSize: "35px" }}>Admin Panel</h1>
          <ul className="adminfunction">
            <li><Link to={"/admin/userslist"}>Users list</Link></li>
            <li><Link to={"/admin/pizzaslist"}>Pizzas list</Link></li>
            <li><Link to={"/admin/addpizza"}>Add new pizza</Link></li>
            <li><Link to={"/admin/orderslist"}>Orders list</Link></li>
          </ul>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Adminscreen;
