import { Query, Resolver } from "@nestjs/graphql";
import { QueryResolvers, Test } from "../../generated-types/graphql";

// Define a simple resolver for the 'test' query
@Resolver()
export class TestResolver implements QueryResolvers {
  @Query()
  test(): Test {
    return {
      test1: "eee",
      test2: "ddd",
      test3: "ddd",
    };
  }
}
