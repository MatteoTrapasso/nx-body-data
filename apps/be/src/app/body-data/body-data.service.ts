import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BodyData } from './interfaces/body-data.interface';
import { CreateBodyDataDTO } from './dto/body-data.dto';
@Injectable()
export class BodyDataService {
  constructor(
    @InjectModel('BodyData') private BodyDataModel: Model<BodyData>,
  ) {}
  async create(CreateBodyDataDTO: CreateBodyDataDTO): Promise<any> {
    const createdCat = new this.BodyDataModel(CreateBodyDataDTO);
    return createdCat.save();
  }
  async findAll(user): Promise<any> {
    return await this.BodyDataModel.find({ user: user }).exec();
  }
  async findById(id): Promise<BodyData> {
    const customer = await this.BodyDataModel.findById(id).exec();
    return customer;
  }
  async find(req): Promise<any> {
    return await this.BodyDataModel.find(req).exec();
  }
  async update(id, CreateBodyDataDTO: CreateBodyDataDTO): Promise<any> {
    return await this.BodyDataModel.findByIdAndUpdate(id, CreateBodyDataDTO, {
      new: true,
    });
  }
  async delete(id): Promise<any> {
    return await this.BodyDataModel.findByIdAndRemove(id);
  }
}
