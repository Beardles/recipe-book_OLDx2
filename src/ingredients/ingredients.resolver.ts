import {
  NotFoundException,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { Ingredient } from './models/ingredient';
import { IngredientsService } from './ingredients.service';
import {
  NewIngredientInput,
  UpdateIngredientInput,
} from './dto/ingredient.dto';

const pubSub = new PubSub();

@Resolver(of => Ingredient)
export class IngredientsResolver {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Query(returns => Ingredient)
  async ingredient(@Args('id') id: string): Promise<Ingredient> {
    const ingredient = await this.ingredientsService.findOne(id);
    if (!ingredient) {
      throw new NotFoundException(id);
    }

    return ingredient;
  }

  @Query(returns => [Ingredient])
  async ingredients(): Promise<Ingredient[]> {
    return this.ingredientsService.findAll();
  }

  @Mutation(returns => Ingredient)
  async addIngredient(
    @Args('newIngredientData') newIngredientData: NewIngredientInput,
  ): Promise<Ingredient> {
    const ingredient = await this.ingredientsService.create(newIngredientData);
    if (!ingredient) {
      throw new InternalServerErrorException('Error creating new ingredient.');
    }

    return ingredient;
  }

  @Mutation(returns => Ingredient)
  async updateIngredient(
    @Args('updateIngredientData') updateIngredientData: UpdateIngredientInput,
  ): Promise<Ingredient> {
    const ingredient = await this.ingredientsService.update(
      updateIngredientData,
    );
    if (!ingredient) {
      throw new InternalServerErrorException('Error updating ingredient');
    }

    return ingredient;
  }

  @Mutation(returns => Ingredient)
  async deleteIngredient(@Args('id') id: string): Promise<Ingredient> {
    const ingredient = await this.ingredientsService.delete(id);

    if (!ingredient) {
      throw new NotFoundException(id);
    }

    return ingredient;
  }
}
