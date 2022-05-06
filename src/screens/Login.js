import React, { useEffect, useState } from "react";
import { loginUser } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Link } from "react-router-dom";
function LoginScreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginstate;
  const dispatch = useDispatch();
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      window.location.href = "/";
    }
  }, []);
  function login() {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 mt-3 text-start shadow-lg p-2 mb-5 bg-body rounded">
         
          <div>
            <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
              Sign In
            </h2>
            {loading && <Loading />}
          {error && <Error error={error} />}
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button className="btn btn-sm mt-3 mb-3" onClick={login}>
              LOGIN
            </button>
            <br />
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={"/register"}
            >
              Click here to Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
