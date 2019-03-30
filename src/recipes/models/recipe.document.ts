import { Document } from 'mongoose';
import { RecipeIngredientDocument } from './recipe-ingredient.document';

export interface RecipeDocument extends Document {
  readonly name: string;
  readonly description: string;
  readonly ingredients: RecipeIngredientDocument[];
  readonly steps: string[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
