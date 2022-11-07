import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from './post.model';

@ObjectType()
@Directive('@key(fields: "id featuredPostId favouritePostId")')
export class User {
  @Field((type) => ID)
  id: number;

  @Field((type) => ID)
  featuredPostId: number;

  @Field((type) => ID)
  favouritePostId: number;

  @Field((type) => [Post])
  posts?: Post[];
}
