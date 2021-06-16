import { ApiProperty } from '@nestjs/swagger';
export class CreateFoodDTO {
  @ApiProperty()
  readonly Food_Code: string;
  readonly Food_Name_ITA: string;
  readonly Total_protein: number;
  readonly Total_fat: number;
  readonly Available_carbohydrates_MSE: number;
}
