import React, { Fragment } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const list = [
    {
      id: "c1",
      name: "snitzel",
      price: 3.46,
      amount: 2,
    },
    {
      id: "c2",
      name: "soup",
      price: 1.4,
      amount: 3,
    },
  ].map((item) => {
    return <li>{item.name}</li>;
  });

  const ulList = <ul className={classes["cart-items"]}> {list} </ul>;

  return (
    <Fragment>
      {ulList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          CLOSE
        </button>
        <button className={classes["button"]}>ORDER</button>
      </div>{" "}
    </Fragment>
  );
};

export default Cart;
