import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from '../../../store/CartStore'
import {useRef,useState,useContext} from 'react'

const MealItemForm = (props) => {

  const amountInputRef = useRef();
  const [formIsValid,setFormIsValid] =useState(true);
 

  const ctx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmountStr = amountInputRef.current.value;
    const amountNumber = +enteredAmountStr;
    if(enteredAmountStr.trim().length===0 || amountNumber<=0 || amountNumber>5){
      setFormIsValid(false);
      return;
    }else{
      props.addItem(amountNumber);
    //ctx.addItem({});
  }
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input ref ={amountInputRef}
      label="Amount" 
      input={{ id: 'amount_'+props.id, type: "number", min:'1',max:'5' ,step:'1' ,defaultValue:'1'}}></Input>
      <button type ="submit">+Add</button>
      {!formIsValid && <p>Please Enter a valid valaue between 1-5</p>}
    </form>
  );
};

export default MealItemForm;
