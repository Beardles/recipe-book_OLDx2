import { Field, ID, ObjectType } from 'type-graphql';
import { RecipeIngredientDocument } from './recipe-ingredient.document';
import { Ingredient } from '../../ingredients/models/ingredient';

@ObjectType()
export class RecipeIngredient {
  @Field(type => ID)
  id: number;

  @Field()
  quantity: string;

  @Field()
  ingredient: string;

  constructor(
    private readonly recipeIngredientDocument: RecipeIngredientDocument,
  ) {
    this.id = recipeIngredientDocument.id;
    this.quantity = recipeIngredientDocument.quantity;
    this.ingredient = recipeIngredientDocument.ingredient;
  }
}
