import { Future, Result } from "@swan-io/boxed";
import { Status, Task } from "../entities/task.entity";

export class FailedTaskDeliveryError<T = undefined> extends Error {
  readonly code: string;
  readonly cause: T | undefined;

  constructor(message: string, code: string, cause?: T) {
    super(message);
    this.code = code;
    this.cause = cause;
  }
}

export interface TaskProviderGateway {
  send(task: Task): Future<Result<{ status: Status }, FailedTaskDeliveryError>>;
}
