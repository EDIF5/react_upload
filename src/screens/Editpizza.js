import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById, updatePizza } from "../actions/pizzaActions";
import { useParams } from "react-router-dom";
import { addPizza } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
function Editpizza({ match }) {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState();
  const dispatch = useDispatch();
  const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);
  const updatepizzastate= useSelector((state)=>state.updatePizzaReducer);
  const { pizza, error, loading } = getpizzabyidstate;
  const{editsuccess, editerror, editloading}=updatepizzastate
  const params = useParams();
  function formHandler() {}
  useEffect(() => {
    console.log("data loaded" + pizza);
    if (pizza) {
      if (pizza._id == params.pizzaid) {
        setname(pizza.name);
        setdescription(pizza.description)
        setcategory(pizza.category)
        setsmallprice(pizza.prices[0]['small'])
        setmediumprice(pizza.prices[0]['medium'])
        setlargeprice(pizza.prices[0]['large'])
        setimage(pizza.image)

      }else{
        dispatch(getPizzaById(params.pizzaid));
      }
    } else {
      console.log("data not loaded");
      dispatch(getPizzaById(params.pizzaid));
    }
    // dispatch(getPizzaById(match.params.pizzaid))
  }, [pizza, dispatch]);

  function formHandler(e) {
    e.preventDefault();
    const updatedpizza = {
        _id:params.pizzaid,
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
      },
    };
    console.log(pizza);
    dispatch(updatePizza(updatedpizza));
  }
  return (
    <div>
      <h1>Editpizza</h1>

      <div className="text-start">
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {editloading && <Loading />}
      {editsuccess && <Success success="Pizza updated successfully successfully" />}
      {editerror && <Error error="Something went wrong" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="small varient price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium varient price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large varient price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Edit Pizza
          </button>
        </form>
      </div>
    </div>
  );
}

export default Editpizza;
