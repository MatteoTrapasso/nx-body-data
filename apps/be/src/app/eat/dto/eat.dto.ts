import { ApiProperty } from '@nestjs/swagger';
export class CreateEatDTO {
  @ApiProperty()
  readonly kcal: number;

  @ApiProperty()
  readonly date: string;

  @ApiProperty()
  readonly user: string;
}
