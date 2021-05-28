import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Eat } from './interfaces/eat.interface';
import { CreateEatDTO } from './dto/eat.dto';
@Injectable()
export class EatService {
  constructor(
    @InjectModel('Eat') private EatModel: Model<Eat>,
  ) {}
  async create(CreateEatDTO: CreateEatDTO): Promise<any> {
    const createdCat = new this.EatModel(CreateEatDTO);
    return createdCat.save();
  }
  async findAll(user): Promise<any> {
    return await this.EatModel.find({ user: user }).exec();
  }
  async findById(id): Promise<Eat> {
    const customer = await this.EatModel.findById(id).exec();
    return customer;
  }
  async find(req): Promise<any> {
    return await this.EatModel.find(req).exec();
  }
  async update(id, CreateEatDTO: CreateEatDTO): Promise<any> {
    return await this.EatModel.findByIdAndUpdate(id, CreateEatDTO, {
      new: true,
    });
  }
  async delete(id): Promise<any> {
    return await this.EatModel.findByIdAndRemove(id);
  }
}
