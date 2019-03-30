import * as mongoose from 'mongoose';

export const IngredientSchema = new mongoose.Schema(
  {
    name: String,
    notes: String,
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
  },
  { timestamps: true },
);
