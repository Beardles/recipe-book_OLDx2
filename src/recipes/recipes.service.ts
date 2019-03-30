import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RecipeDocument } from './models/recipe.document';
import { Recipe } from './models/recipe';
import { NewRecipeInput, UpdateRecipeInput } from './dto/recipe.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel('Recipe') private readonly recipeModel: Model<RecipeDocument>,
  ) {}

  async findAll(): Promise<Recipe[]> {
    const recipeDocuments = await this.recipeModel.find().exec();

    return recipeDocuments.map((r: RecipeDocument) => new Recipe(r));
  }

  async findOne(id: string): Promise<Recipe> {
    const recipeDocument = await this.recipeModel.findById(id).exec();

    return recipeDocument ? new Recipe(recipeDocument) : null;
  }

  async create(newRecipeInput: NewRecipeInput): Promise<Recipe> {
    const recipe = new this.recipeModel(newRecipeInput);

    const recipeDocument = await recipe.save();
    return recipeDocument ? new Recipe(recipeDocument) : null;
  }

  async update(updateRecipeInput: UpdateRecipeInput): Promise<Recipe> {
    const query = { id: updateRecipeInput.id };

    const recipeDocument = await this.recipeModel.findOneAndUpdate(query, {
      name: updateRecipeInput.name,
      description: updateRecipeInput.description,
      steps: updateRecipeInput.steps,
      ingredients: updateRecipeInput.ingredients,
    });

    return new Recipe(recipeDocument);
  }

  async delete(id: string): Promise<Recipe> {
    const recipeDocument = await this.recipeModel
      .findOneAndDelete({ id })
      .exec();

    return new Recipe(recipeDocument);
  }
}
