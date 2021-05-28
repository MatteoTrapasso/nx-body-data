import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDTO {
  @ApiProperty()
  readonly bDate: string;

  @ApiProperty()
  readonly height: number;

  @ApiProperty()
  readonly gender: string;

  @ApiProperty()
  readonly nickname: string;

  @ApiProperty()
  readonly user: string;
}
