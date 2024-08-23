import { Module } from "@nestjs/common";
import { TaskProviders } from "./task/providers";

@Module({
  imports: [],
  controllers: [],
  providers: [...TaskProviders],
  exports: [...TaskProviders],
})
export class InfrastructureModule {}
