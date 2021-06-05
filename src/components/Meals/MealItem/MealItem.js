import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/CartStore'
import { useContext } from 'react'

const MealItem = (props) =>{
    const ctx = useContext(CartContext)

    const price = `$${props.price.toFixed(2)}`;

    const addItemHandler = (enteredAmountANDdummy) =>{

        ;debugger
        ctx.addItem( { 
            id:props.id, 
            name:props.name,
            price:props.price,
            amount:enteredAmountANDdummy.amount  })

    }

  

    return <li className={classes.meal}>
           <div>
              <div> <h3> {props.name}</h3></div>
                <div className={classes.description}>
                   {props.description}
                </div>
                <div className={classes.price}>{price}try</div>               
            </div>    
            <div>
                <MealItemForm addItem={addItemHandler} id={props.id}></MealItemForm>
            </div>
    </li>

}

export default MealItem;