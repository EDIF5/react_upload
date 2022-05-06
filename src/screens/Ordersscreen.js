import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
function Ordersscreen() {
  const dispatch = useDispatch();
  const ordersstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = ordersstate;
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div>
      <h2 style={{ fontSize: "35px" }}>My orders</h2>
      <hr/>
      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div className="col-md-8 m-2" style={{backgroundColor:'red', color:'white'}}>
                <div className="flex-container">
                  <div className="text-start w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Items</h2>
                    <hr/>
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.name} [{item.varient}] * {item.quantity} ={" "}
                            {item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-start w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Address</h2>
                    <hr/>
                    <p>Street: {order.shippingAddress.street}</p>
                    <p>City: {order.shippingAddress.city}</p>
                    <p>Country: {order.shippingAddress.country}</p>
                    <p>pincode: {order.shippingAddress.pincode}</p>
                  </div>
                  <div className="text-start w-100 m-1">
                  <h2 style={{ fontSize: "25px" }}>Order info</h2>
                  <hr/>
                  <p>Order amount: {order.orderAmount}</p>
                  <p>Date: {order.createdAt.substring(0,10)}</p>
                  <p>Transaction Id: {order.transationId}</p>
                  <p>Order Id: {order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Ordersscreen;
