import { useState} from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import Modal from './components/UI/Modal'
import CartProvider from './store/CartProvider';
import MealsProvider from './store/MealsProvider'

/* const DUMMY_MEALS=[
  {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
  },
  {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
  },
  {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
  },
  {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
  },
]; */



function App() {
  const [showCartFormState, setShowCartFormState] = useState(false);
 // const [meals,setMeals]= useState(DUMMY_MEALS);

  const showCartForm = () =>{
    console.log('RUNNED')
    setShowCartFormState(true);
  } 

  const closeCartForm = () => {
    console.log('RUNNED1')
    setShowCartFormState(false);
  }  

  /* const filterMeals = (filterValue) =>{

    let filteredMeals = DUMMY_MEALS.filter( meal => meal.name.startsWith(filterValue));
    setMeals(filteredMeals);

  console.log('FILTERED' +filterValue)
  } */

  return (
   <MealsProvider>
   <CartProvider>
        {showCartFormState && 
       <Modal onClose={closeCartForm}>
         {<Cart onClose={closeCartForm}></Cart>} 
       </Modal>}
       <Header onShowCart={showCartForm}></Header>
      <Meals></Meals>
    </CartProvider>
    </MealsProvider>
  );
}

export default App;
