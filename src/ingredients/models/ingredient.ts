import { Field, ID, ObjectType } from 'type-graphql';
import { IngredientDocument } from './ingredient.document';

@ObjectType()
export class Ingredient {
  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  notes?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  constructor(private readonly ingredientDocument: IngredientDocument) {
    this.id = ingredientDocument.id;
    this.name = ingredientDocument.name;
    this.notes = ingredientDocument.notes;
    this.createdAt = ingredientDocument.createdAt;
    this.updatedAt = ingredientDocument.updatedAt;
  }
}
