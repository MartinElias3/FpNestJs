import { Module, Provider } from "@nestjs/common";
import { InfrastructureModule } from "src/infrastructure/infrastructure.module";
import { SayHelloUseCase } from "./task/use-cases/say-hello.use-case";

const useCases: Provider[] = [SayHelloUseCase];

@Module({
  imports: [InfrastructureModule],
  providers: useCases,
  exports: useCases,
})
export class DomainModule {}
