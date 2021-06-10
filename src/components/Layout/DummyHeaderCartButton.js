import React, {useContext,useEffect,useState }from 'react'
import classes from './DummyHeaderCartButton.module.css'
import CartIcon, { icon } from '../Cart/CartIcon'
import CartContext from '../../store/CartStore'
import MealsContext from '../../store/MealsStore'

const DummyHeaderCartButton = (props) => {

    const[isHighligted,setIsHighligted] = useState(false);
    const [searchFilterValue,setSearchFilterValue] =useState('');
    const ctx =  useContext(MealsContext);  

    const searchFilterChangeHandler= (event) =>{
      // ;debugger
        if(event !== null && event !== undefined)  {
        event.preventDefault();
            setSearchFilterValue(event.target.value);
            console.log('filter changed..')           
        }
    }

    useEffect(() => {
        const identifier = setTimeout(() =>{
          ;debugger
          if(searchFilterValue.length>0){
            ctx.filterMeals(searchFilterValue);
          }
        }, 6000);
    
        return () => {
          console.log('CLEANUP');
          clearTimeout(identifier);
        };
      }, [searchFilterValue]);
   
    

    const btnClasses = `${classes.button} ${ isHighligted ?classes.bump :'' }`

    return <button onClick={props.onClick} className={btnClasses}>
        <span className={classes.icon}><CartIcon></CartIcon></span>
        <span><input type="text" value = {searchFilterValue} onChange={searchFilterChangeHandler}></input></span>
        <span className={classes.badge}>{9}</span>
    </button>

}

export default DummyHeaderCartButton;