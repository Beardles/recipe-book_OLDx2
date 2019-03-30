import { IsOptional, MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class NewIngredientInput {
  @Field()
  @MaxLength(255)
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(255)
  notes?: string;
}

@InputType()
export class UpdateIngredientInput extends NewIngredientInput {
  @Field()
  id: string;
}
