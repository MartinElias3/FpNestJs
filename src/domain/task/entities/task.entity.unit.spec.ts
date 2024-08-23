import { createTask } from "./task.entity";

describe("Task Entity", () => {
  describe("create", () => {
    it("should create a task", () => {
      const result = createTask({ status: "Accepted" });

      expect(result).toMatchObject({
        id: expect.any(String),
        status: "Accepted",
      });
    });
  });
});
