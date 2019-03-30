import { Document } from 'mongoose';

export interface RecipeIngredientDocument extends Document {
  readonly quantity: string;
  readonly ingredient: string;
}
