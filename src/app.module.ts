import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DomainModule } from "./domain/domain.module";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";
import { PresentationModule } from "./presentation/presentation.module";

@Module({
  imports: [InfrastructureModule, PresentationModule, DomainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
