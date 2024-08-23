import { createTask } from "./task.entity";

describe("Task Entity", () => {
  describe("create", () => {
    it("should create a task", () => {
      const result = createTask({ status: "Accepted", title: "Task Title" });

      expect(result).toMatchObject({
        id: expect.any(String),
        status: "Accepted",
        title: "Task Title",
      });
    });
  });
});
