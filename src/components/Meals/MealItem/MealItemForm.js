import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from '../../../store/CartStore'

const MealItemForm = (props) => {

  const ctx = useContext(CartContext);

  const addItem = (event) => {
    event.preventDefault();
    ctx.addItem({});
  }

  return (
    <form onSubmit={addItem} className={classes.form}>
      <Input label="Amount" input={{ id: 'amount_'+props.id, type: "number", min:'1',max:'5' ,step:'1' ,defaultValue:'1'}}></Input>
      <button type ="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
