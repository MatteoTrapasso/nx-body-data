import { Module } from '@nestjs/common';
import { EatController } from './eat.controller';
import { EatService } from './eat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EatSchema } from './schemas/eat.schema';

@Module({
  controllers: [EatController],
  providers: [EatService],
  imports: [
    MongooseModule.forFeature([{ name: 'Eat', schema: EatSchema }]),
  ],
})
export class EatModule {}
