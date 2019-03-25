import { Document } from 'mongoose';

export interface IngredientDocument extends Document {
  readonly name: string;
  readonly notes: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
