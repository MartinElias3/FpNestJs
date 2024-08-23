import { randomUUID } from "node:crypto";

export type Task = {
  id: string;
  status: Status;
};

type Status = "Failed" | "Pending" | "Accepted";

export function createTask(input: Omit<Task, "id">): Task {
  return {
    id: randomUUID(),
    status: input.status,
  };
}
