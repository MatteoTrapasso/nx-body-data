import {ApiProperty} from '@nestjs/swagger';
import {MenuItem} from "@models/vo/meal";

export class CreateMealDTO {
  @ApiProperty()
  readonly type: string;

  @ApiProperty()
  readonly time: Date;

  @ApiProperty()
  readonly menu: MenuItem[];

  @ApiProperty()
  readonly date: string;

  @ApiProperty()
  readonly user: string;
}
