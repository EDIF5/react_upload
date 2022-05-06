import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartScreen from "./screens/cartScreen";
import RegisterScreen from "./screens/Register";
import LoginScreen from "./screens/Login";
import Ordersscreen from "./screens/Ordersscreen";
import Adminscreen from "./screens/Adminscreen";
import Userslist from "./screens/Userslist";
import Orderslist from "./screens/Orderslist";
import Pizzaslist from "./screens/Pizzaslist";
import Addpizza from "./screens/Addpizza";
import Editpizza from "./screens/Editpizza";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Homescreen />}></Route>
          <Route path="/cart" element={<CartScreen/>}></Route>
          <Route path="/register" element={<RegisterScreen/>}></Route>
          <Route path="/login" element={<LoginScreen/>}></Route>
          <Route path="/admin" element={<Adminscreen/>}>
              <Route index element={<Userslist/>}></Route>
              <Route path="userslist"  element={<Userslist/>}></Route>
              <Route path="orderslist"  element={<Orderslist/>}></Route>
              <Route path="pizzaslist"  element={<Pizzaslist/>}></Route>
              <Route path="addpizza"  element={<Addpizza/>}></Route>
              <Route path="editpizza"  element={<Editpizza/>}>
                 <Route path=":pizzaid"  ></Route>
              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
