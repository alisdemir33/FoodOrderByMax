import React, {useContext }from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon, { icon } from '../Cart/CartIcon'
import CartContext from '../../store/CartStore'

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);

    return <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}><CartIcon></CartIcon></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{ctx.items.reduce( (currNumber,item)=>{ return  currNumber + item.amount },0)}</span>
    </button>

}

export default HeaderCartButton;