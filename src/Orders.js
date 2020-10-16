import React, { useState, useEffect } from "react";
import "./Orders.css";

// components
import Order from "./Order";

// firebase
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";

const Orders = () => {
  const [{ user, basket }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => {
              console.log(doc.data());
              return {
                id: doc.id,
                data: doc.data(),
              };
            })
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your orders</h1>
      <div className='orders_container'>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
