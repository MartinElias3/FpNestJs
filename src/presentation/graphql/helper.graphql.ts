import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import type { Request, Response } from "express";

export function generateGraphQLModuleConfiguration<T extends Request = Request>(options: {
  path: string;

  typePath?: string;
  contextFunction?: (params: { req: Request; res: Response }) => T;
}): ApolloDriverConfig {
  return {
    driver: ApolloDriver,
    playground: true,
    plugins: [],
    path: options.path,
    typePaths: ['./**/*.graphql'],
  };
}
