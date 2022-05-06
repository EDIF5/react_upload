import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";
import SmallLoading from "./smallLoading";
function Filter() {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const [loader, setloader] = useState(false);
//   const [successer, setsuccesser] = useState();
  const dispatch = useDispatch();
  const filterpizzasstate = useSelector((state) => state.filterPizzasReducer); 
  const { loading, success } = filterpizzasstate;
  useEffect(() => {
     setloader(loading);
  }, [loading])
  
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center shadow-lg p-2 mb-5 bg-body rounded">
        <div className="col-md-3 ">
          <input
            value={searchkey}
            onChange={(e) => setsearchkey(e.target.value)}
            type="text"
            className="form-control w-100"
            placeholder="search pizzas"
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-control w-100 mt-2"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-veg</option>
          </select>
        </div>
        <div className="col-md-3">
          <button
            className="btn w-100 mt-1"
            onClick={() => dispatch(filterPizzas(searchkey, category))()}
          >
            {loading && <SmallLoading />}
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
