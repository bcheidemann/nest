import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from './models/post.model';
import { User } from './models/user.model';
import { PostsService } from './posts.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField((of) => [Post])
  public posts(@Parent() user: User): Post[] {
    return this.postsService.findAllByAuthorId(user.id);
  }

  @ResolveField((of) => Post)
  public featuredPost(@Parent() user: User): Post {
    return this.postsService.findOne(user.featuredPostId);
  }

  @ResolveField((of) => Post)
  public favouritePost(@Parent() user: User): Post {
    return this.postsService.findOne(user.featuredPostId);
  }
}
