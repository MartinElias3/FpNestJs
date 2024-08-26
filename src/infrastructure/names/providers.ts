import { Provider } from "@nestjs/common";

import { NAME_PROVIDER } from "src/utils/constants";
import { NameClient } from "./name-client";

export const NameProviders: Provider[] = [
  {
    provide: NAME_PROVIDER,
    useClass: NameClient,
  },
];
