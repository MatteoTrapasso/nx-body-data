import { ApiProperty } from '@nestjs/swagger';
export class CreateFoodDTO {
  @ApiProperty()
  readonly Food_Code: string;
}
