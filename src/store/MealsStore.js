import React from 'react';

const MealsContext = React.createContext({
  meals:  [],   
  filterMeals: (filterValue) => {},  
});

export default MealsContext;