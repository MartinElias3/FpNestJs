import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { Future, Result } from "@swan-io/boxed";

import { RepositoryTechnicalError } from "src/domain/task/gateways/task-repository.gateway";
import { match } from "ts-pattern";
import {
  Mutation as MutationGQL,
  MutationResolvers,
  SayHelloInput,
  SayHelloRejection,
  SayHelloSuccessPayload,
} from "../../generated-types/graphql";
@Resolver()
export class SayHelloResolver implements MutationResolvers {
  @Mutation(() => String)
  async sayHello(@Args("input") { name }: SayHelloInput): Promise<MutationGQL["sayHello"]> {
    return this.convertToFuture(name)
      .mapOkToResult(this.mapToSuccess)
      .mapErrorToResult(this.mapToRejection)
      .resultToPromise();
  }

  private sayAsync(name: string): Promise<string> {
    return match(name)
      .with("Martin", () => Promise.resolve("Good Name"))
      .otherwise(() => Promise.reject("Bad name bro"));
  }

  private convertToFuture(name: string): Future<Result<string, RepositoryTechnicalError>> {
    return Future.fromPromise<string, Error>(this.sayAsync(name))
      .mapError((err) => new RepositoryTechnicalError(err.message))
      .mapOk((name) => name);
  }
  private mapToRejection(error: RepositoryTechnicalError): Result<SayHelloRejection, never> {
    return Result.Ok({
      __typename: "SayHelloRejection" as const,
      message: error.message,
    });
  }

  private mapToSuccess(message: string): Result<SayHelloSuccessPayload, never> {
    return Result.Ok({
      __typename: "SayHelloSuccessPayload" as const,
      message,
    });
  }
}
