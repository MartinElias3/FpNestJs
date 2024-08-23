import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Status, Task } from "src/domain/task/entities/task.entity";

@Table({ updatedAt: false, tableName: TaskModel.tableName })
export class TaskModel extends Model<TaskModel, Partial<TaskModel>> {
  public static override tableName = "Task";

  @PrimaryKey
  @Column(DataType.STRING)
  declare id: string;

  @Column(DataType.STRING)
  declare title: string;

  @Column(DataType.STRING)
  declare status: string;

  public static toModel(task: Task): TaskModel {
    return TaskModel.build({
      id: task.id,
      title: task.title,
      status: task.status,
    });
  }

  static toEntity(taskModel: TaskModel): Task {
    return {
      id: taskModel.id,
      title: taskModel.title,
      status: taskModel.status as Status,
    };
  }
}
