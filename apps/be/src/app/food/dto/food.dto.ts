import { ApiProperty } from '@nestjs/swagger';
export class CreateFoodDTO {
  @ApiProperty()
  readonly height: number;
}
