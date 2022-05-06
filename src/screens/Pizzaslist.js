import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";
import { getAllPizzas, deletePizza } from "../actions/pizzaActions";
function Pizzaslist() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <h2>Pizzas List</h2>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      <table className="table table-bordered ">
        <thead className="thead-dark text-start">
          <th>Name</th>
          <th>Prices</th>
          <th>Category</th>
          <th>Action</th>
        </thead>
        {pizzas &&
          pizzas.map((pizza) => {
            return  (
            <tr>
                <td>{pizza.name}</td>
                <td>
                  small : {pizza.prices[0]["small"]}
                  <br />
                  Meduim : {pizza.prices[0]["medium"]}
                  <br />
                  Large : {pizza.prices[0]["large"]}
                </td>

                <td>{pizza.category}</td>
                <td>
                  <i
                    className="fa fa-trash m-1"
                    onClick={() => {
                      dispatch(deletePizza(pizza._id));
                    }}
                  ></i>
                  <Link to={`/admin/editpizza/${pizza._id}`}>
                    <i className="fa fa-edit m-1"></i>
                  </Link>
                </td>
              </tr>)
            
          })}
      </table>
    </div>
  );
}

export default Pizzaslist;
