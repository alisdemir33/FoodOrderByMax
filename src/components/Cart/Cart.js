import React, { useContext, Fragment } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartStore";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  /*   const list = [
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
  ] */

  const addItemHandler = (item) => {
    ctx.addItem({...item,amount:1});
  };
  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };

  const list = ctx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        onAdd={addItemHandler.bind(null, item)}
        onRemove={removeItemHandler.bind(null, item.id)}
        name={item.name}
        amount={item.amount}
        price={item.price}
      ></CartItem>
    );
  });

  const ulList = <ul className={classes["cart-items"]}> {list} </ul>;
  const orderButtonVisible = ctx.items.length > 0;

  return (
    <Fragment>
      {ulList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          CLOSE
        </button>
        {orderButtonVisible && (
          <button className={classes["button"]}>ORDER</button>
        )}
      </div>{" "}
    </Fragment>
  );
};

export default Cart;
