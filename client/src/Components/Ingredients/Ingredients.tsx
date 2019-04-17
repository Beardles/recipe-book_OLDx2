import React from 'react';
import { IngredientsList } from './';

const Ingredients = () => {
  return (
    <>
      <div>Ingredients</div>
      <React.Suspense fallback={<div>Fetching ingredients...</div>}>
        <IngredientsList />
      </React.Suspense>
    </>
  );
};

export default Ingredients;
