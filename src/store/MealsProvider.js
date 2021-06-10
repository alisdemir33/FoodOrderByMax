import React, { useEffect, useReducer } from "react";
import MealsContext from "./MealsStore";

const defaultMealsState = {
  meals: [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
  ]
};

const mealsReducer = (state, action) => {
 
    if (action.type === "FILTER_MEALS") {
      let filteredMeals = state.meals.filter( meal => meal.name.startsWith(action.payload));
      console.log(filteredMeals);
      return {meals:filteredMeals};
  } else {
        return defaultMealsState;
  }
};

const MealsProvider = (props) => {
  // const [currentCartList, setCurrentCartList] = useState([]);
  const [mealsState, dispatchMealAction] = useReducer(
    mealsReducer,
    defaultMealsState
  );

  /*     const onAddToCartHandler = (item) => {   
        let newList= [...currentCartList,item];
        setCurrentCartList(newList);
        };
       */
  const onFilterHandler = (filterValue) => {
    dispatchMealAction({ type: "FILTER_MEALS", payload: filterValue });
  };

 /*  const onRemoveItemHandler = (id) => {
   ;debugger
    dispatchCartAction({ type: "REMOVE_ITEM", payload: id });
  };
 */
  const mealsContext = {
    meals: mealsState.meals,    
    filterMeals: onFilterHandler  
  };
  console.log('Meal Before Render')
  return (
    <MealsContext.Provider value={mealsContext}>
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
