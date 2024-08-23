import { Future, Result } from "@swan-io/boxed";
import { Task } from "../entities/task.entity";

export class RepositoryTechnicalError extends Error {
  code: "repository-technical-error";
}

export interface TaskRepository {
  create(task: Task): Future<Result<Task, RepositoryTechnicalError>>;
}
