import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { User } from './models/user.model';
import { PostsResolver } from './posts.resolver';
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
        // orphanedTypes: [User],
      },
    }),
  ],
  providers: [
    PostsService,
    // PostsResolver,
    UsersResolver
  ],
})
export class PostsModule {}
