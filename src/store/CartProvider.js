import React,{useState,useEffect,useReducer} from 'react'
import CartContext from './CartStore'

const defaultCartState ={
    items :[],
    totalAmount:0,
}

const cartReducer = (state,action) =>{

    if(action.type ==="ADD_ITEM"){
        const updatedItems = state.items.concat(action.payload);
        const updatedTotalAmount = state.totalAmount + ( action.payload.price* action.payload.amount);        
        return { items:updatedItems, totalAmount:updatedTotalAmount};
    }else if(action.type ==="REMOVE_ITEM"){

    }else{
        return state;
        }     
}

const CartProvider = (props) =>{

   // const [currentCartList, setCurrentCartList] = useState([]);
   const[cartState,dispatchCartAction] =  useReducer (cartReducer,defaultCartState);

    useEffect(() => {
        //const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
       const list = [
            {
                id:'c1',
                name: 'snitzel',
                price: 3.46,
                amount: 2
            },
            {
                id:'c2',
                name: 'soup',
                price: 1.4,
                amount: 3
            },
            {
                id:'c3',
                name: 'baklava',
                price: 1.4,
                amount: 4
            }
        ];
      //  setCurrentCartList(list);
      }, []);

/*     const onAddToCartHandler = (item) => {   
        let newList= [...currentCartList,item];
        setCurrentCartList(newList);
        };
       */
        const onIncAmountHandler = (item) => { 
            dispatchCartAction( {type:'ADD_ITEM', payload:item})
        };

        const onDecAmountHandler = (id) => {  
            dispatchCartAction( {type:'REMOVE_ITEM', payload:id})           
          };

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: onIncAmountHandler,
        removeItem:onDecAmountHandler      
      }

return(
<CartContext.Provider  value={cartContext}>
      {props.children}
    </CartContext.Provider>);
}

export default CartProvider;