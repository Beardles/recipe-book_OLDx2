import { MaxLength } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import { RecipeIngredient } from '../models/recipe-ingredient';

@InputType()
export class NewRecipeInput {
  @Field()
  @MaxLength(255)
  name: string;

  @Field()
  @MaxLength(4000)
  description: string;

  @Field()
  steps: string[];

  @Field()
  ingredients: RecipeIngredient[];
}
