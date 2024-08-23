import { Injectable } from "@nestjs/common";
import { Future, Result } from "@swan-io/boxed";
import { Status, Task } from "src/domain/task/entities/task.entity";
import {
  FailedTaskDeliveryError,
  TaskProviderGateway,
} from "src/domain/task/gateways/task-provider.gateway.";
import { match } from "ts-pattern";

@Injectable()
export class TaskClient implements TaskProviderGateway {
  readonly titleThatShouldReject = "ImABadTitle";
  send(task: Task): Future<Result<{ status: Status }, FailedTaskDeliveryError>> {
    return Future.fromPromise(this.simulateAsyncFlow(task.title))
      .mapError(() => new FailedTaskDeliveryError("Failed to communicate with task client"))
      .mapOk((response) => response);
  }

  private simulateAsyncFlow(title: Task["title"]): Promise<{ status: Status }> {
    return match(title)
      .with(this.titleThatShouldReject, () => Promise.reject("Bad title !!!"))
      .otherwise(() => Promise.resolve({ status: "Accepted" as Status }));
  }
}
