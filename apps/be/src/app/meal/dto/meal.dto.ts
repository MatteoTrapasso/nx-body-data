import { ApiProperty } from '@nestjs/swagger';
export class CreateMealDTO {
  @ApiProperty()
  readonly type: string;

  @ApiProperty()
  readonly time: string;

  @ApiProperty()
  readonly food: string;

  @ApiProperty()
  readonly date: string;

  @ApiProperty()
  readonly user: string;
}
