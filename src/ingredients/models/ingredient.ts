import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Ingredient {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  notes?: string;

  @Field()
  createdDate: Date;

  @Field()
  modifiedDate: Date;
}
