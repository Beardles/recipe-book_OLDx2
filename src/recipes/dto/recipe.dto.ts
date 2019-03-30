import { MaxLength } from 'class-validator';
import { InputType, Field, ID } from 'type-graphql';
import { RecipeIngredient } from '../models/recipe-ingredient';

@InputType()
export class NewRecipeInput {
  @Field()
  @MaxLength(255)
  name: string;

  @Field()
  @MaxLength(4000)
  description: string;

  @Field(type => [String])
  steps: string[];

  @Field(type => [NewRecipeIngredientInput])
  ingredients: RecipeIngredient[];
}

@InputType()
export class NewRecipeIngredientInput {
  @Field(type => ID)
  id: string;

  @Field()
  quantity: string;
}

@InputType()
export class UpdateRecipeInput extends NewRecipeInput {
  @Field()
  id: string;
}
