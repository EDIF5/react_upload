import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/userActions";
function Navbar() {
  
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const dispatch=useDispatch()
  const { currentUser } = userstate;
  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Josh Pizza
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <div className="dropdown mt-2">
              <a className=" dropdown-toggle  " style={{color:'black',textDecoration:'none'}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {currentUser.name}
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="/orders">Orders</a></li>
                <li><a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Log out</li></a></li>
              </ul>
            </div>
            ) : (
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={"/login"}>
                  Login
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to={"/cart"}>
                Cart {cartstate.cartItems.length}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
