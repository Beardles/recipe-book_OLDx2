import { NotFoundException, Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { Ingredient } from './models/ingredient';
import { IngredientsService } from './ingredients.service';

const pubSub = new PubSub();

@Resolver(of => Ingredient)
export class IngredientsResolver {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Query(returns => [Ingredient])
  ingredients(): Promise<Ingredient[]> {
    return this.ingredientsService.findAll();
  }
}
