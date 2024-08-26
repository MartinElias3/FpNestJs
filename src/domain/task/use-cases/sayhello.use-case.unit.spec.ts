import { Future, Result } from "@swan-io/boxed";
import { match } from "ts-pattern";

import { NameProviderGateway } from "../gateways/name-provider.gateway.";
import { RepositoryTechnicalError } from "../gateways/task-repository.gateway";
import { SayHelloUseCase } from "./say-hello.use-case";
const nameThatShouldReject = "BadName";

class MockNameClient implements NameProviderGateway {
  send(name: string): Future<Result<string, RepositoryTechnicalError>> {
    return match(name)
      .with(nameThatShouldReject, () =>
        Future.value(Result.Error(new RepositoryTechnicalError("Not good with this name"))),
      )

      .otherwise(() => Future.value(Result.Ok("I'm good with this name")));
  }
}

describe("SayHelloUseCase", () => {
  let useCase: SayHelloUseCase;
  const mockClient = new MockNameClient();
  beforeAll(() => {
    useCase = new SayHelloUseCase(mockClient);
  });

  it("should return a success string", async () => {
    const name = "Martin";
    const res = await useCase.execute(name);

    expect(res).toEqual(Result.Ok(`I'm good with this name`));
  });

  it("should return an error if name is not good", async () => {
    const res = await useCase.execute(nameThatShouldReject);

    expect(res).toMatchObject(
      Result.Error(new RepositoryTechnicalError("Not good with this name")),
    );
  });
});
