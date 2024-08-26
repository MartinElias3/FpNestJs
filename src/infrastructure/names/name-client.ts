import { Injectable } from "@nestjs/common";
import { Future, Result } from "@swan-io/boxed";
import { NameProviderGateway } from "src/domain/task/gateways/name-provider.gateway.";
import { RepositoryTechnicalError } from "src/domain/task/gateways/task-repository.gateway";
import { match } from "ts-pattern";

@Injectable()
export class NameClient implements NameProviderGateway {
  send(name: string): Future<Result<string, RepositoryTechnicalError>> {
    return Future.fromPromise<string, Error>(this.sayAsync(name))
      .mapError((err) => new RepositoryTechnicalError(err.message))
      .mapOk((name) => name);
  }

  private sayAsync(name: string): Promise<string> {
    return match(name)
      .with("Martin", () => Promise.resolve("Good Name"))
      .otherwise(() => Promise.reject("Bad name bro"));
  }
}
