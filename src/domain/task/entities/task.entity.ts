import { randomUUID } from "node:crypto";

export type Task = {
  id: string;
  status: Status;
  title: string;
};

export type Status = "Failed" | "Pending" | "Accepted";

export function createTask(input: Omit<Task, "id">): Task {
  return {
    id: randomUUID(),
    status: input.status,
    title: input.title,
  };
}
