import {
  Controller,
  Res,
  Query,
  Get,
  HttpStatus,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete, Req,
} from '@nestjs/common';
import { EatService } from './eat.service';
import { CreateEatDTO } from './dto/eat.dto';

@Controller('eat')
export class EatController {
  constructor(private readonly service: EatService) {}

  @Post()
  async add(@Req() req, @Res() res, @Body() dto: CreateEatDTO) {
    const user = req.user.sub;
    const createDTO = {...dto, user};
    const data = await this.service.create(createDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Post has been created successfully',
      data,
      hasError: false,
    });
  }

  @Get()
  async findAll(@Res() res, @Req() req) {
    const user = req.user.sub;
    const data = await this.service.findAll(user);
    return res.status(HttpStatus.OK).json(data);
  }

  @Get(':id')
  async findById(@Res() res, @Param('id') id: string,) {
    const data = await this.service.findById(id);
    if (!data) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(data);
  }

  @Put(':id')
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() CreateEatDTO: CreateEatDTO,
  ){
    const data = await this.service.update(id, CreateEatDTO);
    if (!data) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      data,
      hasError: false,
    });
  }

  @Delete(':id')
  async delete(@Res() res, @Param('id') id: string) {
    const data = await this.service.delete(id);
    if (!data) throw new NotFoundException('Post does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted',
      data,
      hasError: false,
    });
  }
}
