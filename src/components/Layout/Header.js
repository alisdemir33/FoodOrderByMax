import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import DummyHeaderCartButton from './DummyHeaderCartButton'

const Header = (props) =>{
 return(  <React.Fragment>
        <header className={classes.header}>
<h1>React Meals</h1>
<DummyHeaderCartButton filterMeals={props.onFilterMeals}></DummyHeaderCartButton>
<HeaderCartButton onClick={props.onShowCart} ></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
    <img src ={mealsImage} alt ="A tble of deli meals.."></img>
        </div>
    </React.Fragment>);
}

export default Header;