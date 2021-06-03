import React, {useContext,useEffect,useState }from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon, { icon } from '../Cart/CartIcon'
import CartContext from '../../store/CartStore'

const HeaderCartButton = (props) => {

    const[isHighligted,setIsHighligted] = useState(false);
    const ctx = useContext(CartContext);
    const {items} = ctx;

    useEffect(() => { 
       if(items.length === 0){
       return;
    }
        setIsHighligted(true);
       
       
      const timer = setTimeout( () =>{
            setIsHighligted(false);
        },300); 
        
        return () =>{
            clearTimeout(timer);
        }
        
    }, [items]);
   
    

    const btnClasses = `${classes.button} ${ isHighligted ?classes.bump :'' }`

    return <button onClick={props.onClick} className={btnClasses}>
        <span className={classes.icon}><CartIcon></CartIcon></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{ctx.items.reduce( (currNumber,item)=>{ return  currNumber + item.amount },0)}</span>
    </button>

}

export default HeaderCartButton;