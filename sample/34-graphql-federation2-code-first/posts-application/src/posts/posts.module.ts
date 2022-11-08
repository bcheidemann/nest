import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { Post } from './models/post.model';
import { User } from './models/user.model';
import { PostsService } from './posts.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      autoSchemaFile: {
        federation: 2,
      },
      driver: ApolloFederationDriver,
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
  ],
  providers: [
    PostsService,
    UsersResolver
  ],
})
export class PostsModule {}
