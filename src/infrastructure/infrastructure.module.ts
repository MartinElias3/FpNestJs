import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { models } from "models/models";
import { NameProviders } from "./names/providers";

@Module({
  imports: [
    // I DONT MIND USING ENV ETC...
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "postgres",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "boxed-clean",
      models: models,
      autoLoadModels: true,
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [...NameProviders],
  exports: [...NameProviders],
})
export class InfrastructureModule {}
