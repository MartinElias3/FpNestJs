import { Future, Result } from "@swan-io/boxed";
import { Status, Task } from "../entities/task.entity";

export class FailedTaskDeliveryError extends Error {
  code: "failed-task-delivery";
}

export interface TaskProviderGateway {
  send(task: Task): Future<Result<{ status: Status }, FailedTaskDeliveryError>>;
}
