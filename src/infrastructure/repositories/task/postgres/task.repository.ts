import { Injectable } from "@nestjs/common";
import { Future, Result } from "@swan-io/boxed";
import { Task } from "src/domain/task/entities/task.entity";
import {
  RepositoryTechnicalError,
  TaskRepository,
} from "src/domain/task/gateways/task-repository.gateway";
import { TaskModel } from "./task.model";

@Injectable()
export class PostgresTaskRepository implements TaskRepository {
  create(task: Task): Future<Result<Task, RepositoryTechnicalError>> {
    return Future.value(Result.Ok(TaskModel.toModel(task))).flatMapOk((collection) => {
      return Future.fromPromise(collection.save())
        .mapError((err: Error) => new RepositoryTechnicalError("Error while creating a new task"))
        .mapOk((taskModel) => TaskModel.toEntity(taskModel));
    });
  }
}
