import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";

@Module({
  imports: [InfrastructureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
