import { PubSub } from 'apollo-server-express';
import { Resolver, Query, Args, Subscription } from '@nestjs/graphql';
import { Recipe } from './models/recipe';
import { RecipesService } from './recipes.service';
import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Mutation } from 'type-graphql';
import { NewRecipeInput, UpdateRecipeInput } from './dto/recipe.dto';

const pubSub = new PubSub();

@Resolver(of => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Query(returns => Recipe)
  async recipe(@Args('id') id: string): Promise<Recipe> {
    const recipe = await this.recipesService.findOne(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }

    return recipe;
  }

  @Query(returns => [Recipe])
  async recipes(): Promise<Recipe[]> {
    const recipes = await this.recipesService.findAll();
    return recipes;
  }

  @Mutation(returns => Recipe)
  async addRecipe(
    @Args('createRecipeData') createRecipeData: NewRecipeInput,
  ): Promise<Recipe> {
    const recipe = await this.recipesService.create(createRecipeData);
    if (!recipe) {
      throw new InternalServerErrorException('Error creating new recipe.');
    }
    pubSub.publish('recipeAdded', { recipeAdded: recipe });

    return recipe;
  }

  @Mutation(returns => Recipe)
  async updateRecipe(
    @Args('updateRecipeData') updateRecipeData: UpdateRecipeInput,
  ): Promise<Recipe> {
    const recipe = await this.recipesService.update(updateRecipeData);
    if (!recipe) {
      throw new InternalServerErrorException(
        `Error updating recipe ${updateRecipeData.id}.`,
      );
    }

    return recipe;
  }

  @Mutation(returns => Recipe)
  async deleteRecipe(@Args('id') id: string): Promise<Recipe> {
    const recipe = await this.recipesService.delete(id);

    if (!recipe) {
      throw new NotFoundException(id);
    }

    return recipe;
  }

  @Subscription(returns => Recipe)
  recipeAdded() {
    return pubSub.asyncIterator('recipeAdded');
  }
}
