import { Future, Result } from "@swan-io/boxed";
import { RepositoryTechnicalError } from "./task-repository.gateway";

export interface NameProviderGateway {
  send(name: string): Future<Result<string, RepositoryTechnicalError>>;
}
