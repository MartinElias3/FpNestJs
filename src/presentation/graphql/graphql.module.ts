import { ApolloDriverConfig } from "@nestjs/apollo";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { InfrastructureModule } from "src/infrastructure/infrastructure.module";
import { generateGraphQLModuleConfiguration } from "./helper.graphql";
import { TestResolver } from "./resolvers/queries/test.resolver";

const resolvers = [TestResolver];

const graphQLModuleConfiguration = generateGraphQLModuleConfiguration({
  path: "/graphql",
});

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>(graphQLModuleConfiguration),
    InfrastructureModule,
  ],
  providers: [...resolvers],
})
export class GraphqlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //throw new Error("Method not implemented.");
  }
}