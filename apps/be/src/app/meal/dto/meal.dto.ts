import {ApiProperty} from '@nestjs/swagger';
import {MenuItem} from "@models/vo/meal";

export class CreateMealDTO {
  @ApiProperty()
  readonly type: string;

  @ApiProperty()
  readonly time: string;

  @ApiProperty()
  readonly menu: MenuItem[];

  @ApiProperty()
  readonly date: string;

  @ApiProperty()
  readonly user: string;
}
