import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BodyDataModule } from './body-data/body-data.module';
import { MongooseModule } from '@nestjs/mongoose';
import {Module, MiddlewareConsumer, RequestMethod, Delete} from '@nestjs/common';
import {AuthenticationMiddleware} from "./common/authentication.middleware";
import {environment} from "../environments/environment";

@Module({
  imports: [
    MongooseModule.forRoot(
      environment.MONGO_DB_SRV,
    ),
    BodyDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(AuthenticationMiddleware)
        .forRoutes(
            { path: 'body-data', method: RequestMethod.ALL }
        );
  }
}
