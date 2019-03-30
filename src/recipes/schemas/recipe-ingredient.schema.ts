import * as mongoose from 'mongoose';

export const RecipeIngredientSchema = new mongoose.Schema({
  quantity: String,
  ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' },
});
