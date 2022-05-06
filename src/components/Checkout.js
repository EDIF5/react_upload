import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
function Checkout({ subtotal }) {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      {loading && <Loading />}
      {success && <Success success="Your order  placed successfully" />}
      {error && <Error error="Something went wrong" />}

      <StripeCheckout
        stripeKey="pk_test_51KukSTCZiPONfVlDk83Du8jlWCgHMymou8edwJjhyGWQMn0OAyWcskl6vItM2LHYcpBCnyTJQECiFPBqw1EC359700AWoROx94"
        currency="ETB"
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
      >
        <button className="btn btn-sm">PAY NOW</button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout;
