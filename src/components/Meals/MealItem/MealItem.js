import classes from './MealItem.module.css'

const MealItem = (props) =>{

    const price = `$${props.price.toFixed(2)}`;

    return <li className={classes.meal}>
           <div>
              <div> <h3> {props.name}</h3></div>
                <div className={classes.description}>
                   {props.description}
                </div>
                <div className={classes.price}>{price}try</div>               
            </div>    
    </li>

}

export default MealItem;