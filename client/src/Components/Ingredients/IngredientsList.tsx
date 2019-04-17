import * as React from 'react';
import { gql } from 'apollo-boost';
import { IIngredient } from '../../Domain/Ingredient';
import { QueryHookResult, useQuery } from 'react-apollo-hooks';

const GET_INGREDIENTS = gql`
  {
    ingredients {
      id
      name
      notes
    }
  }
`;

interface QueryResult {
  ingredients: IIngredient[];
}

const IngredientsList: React.FC<{}> = () => {
  const { data, error }: QueryHookResult<QueryResult, {}> = useQuery(
    GET_INGREDIENTS,
    { suspend: true },
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No Ingredients Yet!</div>;
  }

  return (
    <>
      <div>Ingredients List</div>
      {data &&
        data.ingredients.map((i: IIngredient) => (
          <>
            <div>{i.name}</div>
            <div>{i.notes}</div>
          </>
        ))}
    </>
  );
};

export default IngredientsList;
