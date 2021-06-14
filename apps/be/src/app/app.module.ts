import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BodyDataModule} from './body-data/body-data.module';
import {MongooseModule} from '@nestjs/mongoose';
import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import {AuthenticationMiddleware} from "./common/authentication.middleware";
import {environment} from "../environments/environment";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from "path";
import {UserModule} from "./user/user.module";
import {FoodModule} from "./food/food.module";
import {MealModule} from "./meal/meal.module";

console.log('__dirname', __dirname);
@Module({
  imports: [
    MongooseModule.forRoot(
      environment.MONGO_DB_SRV,
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'fe'),
    }),
    BodyDataModule,
    UserModule,
    FoodModule,
    MealModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(AuthenticationMiddleware)
        .forRoutes(
            { path: 'body-data', method: RequestMethod.ALL },
            { path: 'user', method: RequestMethod.ALL },
            { path: 'food', method: RequestMethod.ALL },
            { path: 'meal', method: RequestMethod.ALL }
        );
  }
}
