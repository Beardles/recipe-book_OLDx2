import { IsOptional, Length, MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class NewIngredientInput {
  @Field()
  @MaxLength(255)
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(0, 255)
  notes?: string;
}
