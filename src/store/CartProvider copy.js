import React, { useEffect, useReducer } from "react";
import CartContext from "./CartStore";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
 
    if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {//item var ise amount 1 artıyor ve 
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else 
    {
      updatedItems = state.items.concat(action.payload); //  [...state.items, action.payload];
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } 
  else if (action.type === "REMOVE_ITEM") {   
    
    const id= action.payload;
    const existingCartItemIndex = state.items.findIndex( item =>  item.id === id);
    const existingCartItem = state.items[existingCartItemIndex];

    if(existingCartItem){
        
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if(existingCartItem.amount > 1 )
        {
            // amount will be decreased by 1
            const updatedItem ={
                ...existingCartItem, 
                amount : existingCartItem.amount-1
            }
            updatedItems =[...state.items];
            updatedItems[existingCartItemIndex]= updatedItem;
           
        }else if(existingCartItem.amount === 1)
        {//item will be removed form 'items.'
             updatedItems = state.items.filter( (item) => { return item.id !== id})           
        }else{
          return  defaultCartState;
        }
        return { items: updatedItems, totalAmount: updatedTotalAmount}
    }else{
        return defaultCartState;
    }


  } else {
        return defaultCartState;
  }
};

const CartProvider = (props) => {
  // const [currentCartList, setCurrentCartList] = useState([]);
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );



  /*     const onAddToCartHandler = (item) => {   
        let newList= [...currentCartList,item];
        setCurrentCartList(newList);
        };
       */
  const onAddItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };

  const onRemoveItemHandler = (id) => {
   ;debugger
    dispatchCartAction({ type: "REMOVE_ITEM", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: onAddItemHandler,
    removeItem: onRemoveItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
