import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EatDailySchema } from './schemas/eat-daily.schema';
import {EatDailyController} from "./eat-daily.controller";
import {EatDailyService} from "./eat-daily.service";

@Module({
  controllers: [EatDailyController],
  providers: [EatDailyService],
  imports: [
    MongooseModule.forFeature([{ name: 'BodyData', schema: EatDailySchema }]),
  ],
})
export class EatDailyModule {}
