import { Provider } from "@nestjs/common";

import { TASK_CLIENT } from "src/utils/constants";
import { TaskClient } from "./task-client";

export const TaskProviders: Provider[] = [
  {
    provide: TASK_CLIENT,
    useClass: TaskClient,
  },
];
