import { Injectable } from "@nestjs/common";
import { Future, Result } from "@swan-io/boxed";
import { Status, Task } from "src/domain/task/entities/task.entity";
import {
  FailedTaskDeliveryError,
  TaskProviderGateway,
} from "src/domain/task/gateways/task-provider.gateway.";

@Injectable()
export class TaskClient implements TaskProviderGateway {
  send(task: Task): Future<Result<{ status: Status }, FailedTaskDeliveryError>> {
    //TODO: need to implement with promise
    throw new Error("Method not implemented.");
  }
}
