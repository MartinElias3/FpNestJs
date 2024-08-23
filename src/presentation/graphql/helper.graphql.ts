import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import type { Request, Response } from "express";
import { join } from "node:path";

export function generateGraphQLModuleConfiguration<T extends Request = Request>(options: {
  path: string;

  typePath?: string;
  contextFunction?: (params: { req: Request; res: Response }) => T;
}): ApolloDriverConfig {
  return {
    driver: ApolloDriver,
    playground: true,
    plugins: [],
    definitions: {
      path: join(process.cwd(), "src/presentation/graphql/types.ts"),
    },
    path: options.path,
  };
}
