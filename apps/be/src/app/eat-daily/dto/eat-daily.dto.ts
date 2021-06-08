import { ApiProperty } from '@nestjs/swagger';
export class CreateEatDailyDTO {
  @ApiProperty()
  readonly date: string;

  @ApiProperty()
  readonly user: string;
}
