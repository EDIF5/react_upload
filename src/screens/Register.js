import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading"
import Success from "../components/Success"
import Error from "../components/Error"
import {Link} from 'react-router-dom'
function RegisterScreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate=useSelector((state)=>state.registerUserReducer)
  const {error,loading,success}=registerstate;
  const dispatch=useDispatch();
  function register(){
      if(password!==cpassword){
          alert("password not match")
      }else{
          const user={
              name,
              email,
              password
          }
          console.log(user)
          dispatch(registerUser(user))
      }
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6  text-start shadow-lg p-2 mb-5 bg-body rounded">
          {loading && <Loading/>}
          {success && <Success success="User registed successfully"/>}
          {error && <Error error="Email already exist"/>}
          <div>
            <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
              Register{" "}
            </h2>
            <input
              required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
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
            <input
              required
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button className="btn btn-sm  mt-3 mb-3" onClick={register}> REGISRER</button>
            <br/>
            <Link style={{color:'black',textDecoration:'none'}} to={'/login'}>Click here to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
