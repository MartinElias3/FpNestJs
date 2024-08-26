import { Inject, Injectable } from "@nestjs/common";
import { Future, Result } from "@swan-io/boxed";
import { NAME_PROVIDER } from "../../../utils/constants";
import { NameProviderGateway } from "../gateways/name-provider.gateway.";
import { RepositoryTechnicalError } from "../gateways/task-repository.gateway";

@Injectable()
export class SayHelloUseCase {
  constructor(
    @Inject(NAME_PROVIDER)
    private readonly nameClient: NameProviderGateway,
  ) {}

  public execute(name: string): Future<Result<string, RepositoryTechnicalError>> {
    return this.nameClient.send(name);
  }
}
