import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeSchema } from './schemas/recipe.schema';
import { RecipeIngredientSchema } from './schemas/recipe-ingredient.schema';
import { RecipesService } from './recipes.service';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './recipes.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Recipe', schema: RecipeSchema },
      { name: 'RecipeIngredient', schema: RecipeIngredientSchema },
    ]),
  ],
  providers: [RecipesService, RecipesResolver, DateScalar],
})
export class RecipesModule {}
