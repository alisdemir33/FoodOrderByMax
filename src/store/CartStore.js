import React from 'react';

const CartContext = React.createContext({
  items:  [], 
  totalAmonut:0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

/* export const CartContextProvider = (props) => {
  const [currentCartList, setCurrentCartList] = useState([]);

  useEffect(() => {
    //const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
   const list = [
        {
            name: 'snitzel',
            price: 3.46,
            amount: 2
        },
        {
            name: 'soup',
            price: 1.4,
            amount: 3
        },
        {
            name: 'baklava',
            price: 1.4,
            amount: 4
        }
    ];
    setCurrentCartList(list);
  }, []);

  const onAddToCartHandler = (item) => {   
  let newList= [...currentCartList,item];
  setCurrentCartList(newList);
  };

  const onIncAmountHandler = (nameParam) => { 

  let newList =  currentCartList.map( (item) =>{
     if(item['name'] === nameParam){
        return {...item, amount: item['amount'] +1}
      }    
      else{
        return item;
      }
    });
    setCurrentCartList(newList);   
  };

  const onDecAmountHandler = (nameParam) => {  
    let newList =  currentCartList.map( (item) =>{
        if(item['name'] === nameParam){
           return {...item, amount: item['amount'] -1}
         }    
         else{
           return item;
         }
       });   
       setCurrentCartList(newList);
  };

  return (
    <CartContext.Provider
      value={{
         cartList:currentCartList ,
        onAddToCart: onAddToCartHandler,
        onIncreaseAmount:onIncAmountHandler,
        onDecreaseAmount: onDecAmountHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}; */

export default CartContext;