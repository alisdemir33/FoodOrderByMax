import React, { Fragment } from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary';

const Meals = (props) => {

    return <Fragment>
        <MealsSummary> </MealsSummary>
        <AvailableMeals availableMeals={props.mealList}></AvailableMeals>
    </Fragment>
}
export default Meals;