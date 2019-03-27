import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IngredientDocument } from './models/ingredient.document';
import {
  NewIngredientInput,
  UpdateIngredientInput,
} from './dto/ingredient.dto';
import { Ingredient } from './models/ingredient';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel('Ingredient')
    private readonly ingredientModel: Model<IngredientDocument>,
  ) {}

  async findAll(): Promise<Ingredient[]> {
    const ingredientDocuments = await this.ingredientModel.find().exec();

    return ingredientDocuments.map(
      (i: IngredientDocument) => new Ingredient(i),
    );
  }

  async findOne(id: string): Promise<Ingredient> {
    const ingredientDocument = await this.ingredientModel.findById(id).exec();

    return ingredientDocument ? new Ingredient(ingredientDocument) : null;
  }

  async create(newIngredientInput: NewIngredientInput): Promise<Ingredient> {
    const ingredient = new this.ingredientModel(newIngredientInput);

    const ingredientDocument = await ingredient.save();
    return ingredientDocument ? new Ingredient(ingredientDocument) : null;
  }

  async update(
    updateIngredientInput: UpdateIngredientInput,
  ): Promise<Ingredient> {
    const query = { id: updateIngredientInput.id };

    const ingredientDocument = await this.ingredientModel
      .findOneAndUpdate(query, {
        name: updateIngredientInput.name,
        notes: updateIngredientInput.notes,
      })
      .exec();

    return new Ingredient(ingredientDocument);
  }

  async delete(id: string): Promise<Ingredient> {
    const ingredientDocument = await this.ingredientModel
      .findOneAndDelete({ id })
      .exec();
    return new Ingredient(ingredientDocument);
  }
}
