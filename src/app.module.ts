import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import * as config from 'config';
import { AppController } from './app.controller';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [
    IngredientsModule,
    MongooseModule.forRoot(config.get('mongodb')),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
