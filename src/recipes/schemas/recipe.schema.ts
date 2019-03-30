import * as mongoose from 'mongoose';
import { RecipeIngredientSchema } from './recipe-ingredient.schema';

export const RecipeSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    ingredients: [RecipeIngredientSchema],
    steps: [String],
  },
  { timestamps: true },
);
