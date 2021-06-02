import { Fragment ,useState} from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import Modal from './components/UI/Modal'
function App() {
  const [showCartFormState, setShowCartFormState] = useState(false);

  const showCartForm = () =>{
    console.log('RUNNED')
    setShowCartFormState(true);
  } 

  const closeCartForm = () => {
    console.log('RUNNED1')
    setShowCartFormState(false);
  }  

  return (
    <Fragment>
        {showCartFormState && 
       <Modal onClose={closeCartForm}>
         {<Cart onClose={closeCartForm}></Cart>} 
       </Modal>}

       <Header onShowCart={showCartForm}></Header> 
     
      <Meals></Meals>
    </Fragment>
  );
}

export default App;
