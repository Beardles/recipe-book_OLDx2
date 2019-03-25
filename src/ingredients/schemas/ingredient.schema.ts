import * as mongoose from 'mongoose';

export const IngredientSchema = new mongoose.Schema(
  {
    name: String,
    notes: String,
  },
  { timestamps: true },
);
