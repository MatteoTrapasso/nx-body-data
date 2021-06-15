import { ApiProperty } from '@nestjs/swagger';
import {Food} from "@models/vo/food";
export class CreateMealDTO {
  @ApiProperty()
  readonly type: string;

  @ApiProperty()
  readonly time: string;

  @ApiProperty()
  readonly foods: {
    food: Food
    qty: number
  };

  @ApiProperty()
  readonly date: string;

  @ApiProperty()
  readonly user: string;
}
