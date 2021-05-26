import { Module } from '@nestjs/common';
import { BodyDataController } from './body-data.controller';
import { BodyDataService } from './body-data.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BodyDataSchema } from './schemas/body-data.schema';

@Module({
  controllers: [BodyDataController],
  providers: [BodyDataService],
  imports: [
    MongooseModule.forFeature([{ name: 'BodyData', schema: BodyDataSchema }]),
  ],
})
export class BodyDataModule {}
