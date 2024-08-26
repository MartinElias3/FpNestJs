import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { Future, Result } from "@swan-io/boxed";

import { RepositoryTechnicalError } from "src/domain/task/gateways/task-repository.gateway";
import { SayHelloUseCase } from "src/domain/task/use-cases/say-hello.use-case";
import {
  Mutation as MutationGQL,
  MutationResolvers,
  SayHelloInput,
  SayHelloRejection,
  SayHelloSuccessPayload,
} from "../../generated-types/graphql";
@Resolver()
export class SayHelloResolver implements MutationResolvers {
  constructor(private readonly sayHelloUseCase: SayHelloUseCase) {}

  @Mutation(() => String)
  async sayHello(@Args("input") { name }: SayHelloInput): Promise<MutationGQL["sayHello"]> {
    return this.sayHelloUseCase
      .execute(name)
      .mapOkToResult(this.mapToSuccess)
      .mapErrorToResult(this.mapToRejection)
      .resultToPromise();
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
