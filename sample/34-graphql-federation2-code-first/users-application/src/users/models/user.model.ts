import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id featuredPostId favouritePostId")')
export class User {
  @Field((type) => ID)
  id: number;

  @Field((type) => ID)
  featuredPostId: number;

  @Field((type) => ID)
  favouritePostId: number;

  @Field()
  name: string;
}
