import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IngredientDocument } from './models/ingredient.document';
import { NewIngredientInput } from './dto/ingredient.dto';
import { Ingredient } from './models/ingredient';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel('Ingredient')
    private readonly ingredientModel: Model<IngredientDocument>,
  ) {}

  async create(
    newIngredientInput: NewIngredientInput,
  ): Promise<IngredientDocument> {
    const ingredient = new this.ingredientModel(newIngredientInput);
    return await ingredient.save();
  }

  async findAll(): Promise<Ingredient[]> {
    const ingredientDocuments = await this.ingredientModel.find().exec();

    return ingredientDocuments.map((i: IngredientDocument) => ({
      id: i.id,
      name: i.name,
      notes: i.notes,
      createdDate: i.createdAt,
      modifiedDate: i.updatedAt,
    }));
  }
}
