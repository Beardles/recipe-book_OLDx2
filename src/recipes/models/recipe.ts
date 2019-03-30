import { Field, ID, ObjectType } from 'type-graphql';
import { RecipeDocument } from './recipe.document';
import { RecipeIngredientDocument } from './recipe-ingredient.document';

@ObjectType()
export class Recipe {
  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  ingredients: any[];

  @Field()
  steps: string[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  constructor(private readonly recipeDocument: RecipeDocument) {
    this.id = recipeDocument.id;
    this.name = recipeDocument.name;
    this.description = recipeDocument.description;
    this.ingredients = recipeDocument.ingredients;
    this.steps = recipeDocument.steps;
    this.createdAt = recipeDocument.createdAt;
    this.updatedAt = recipeDocument.updatedAt;
  }
}
