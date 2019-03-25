import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientSchema } from './schemas/ingredient.schema';
import { IngredientsService } from './ingredients.service';
import { IngredientsResolver } from './ingredients.resolver';
import { DateScalar } from '../common/scalars/date.scalar';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Ingredient', schema: IngredientSchema },
    ]),
  ],
  controllers: [],
  providers: [IngredientsResolver, IngredientsService, DateScalar],
})
export class IngredientsModule {}
