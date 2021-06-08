import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {EatDaily} from "@models/vo/eat-daily";
import {CreateEatDailyDTO} from "./dto/eat-daily.dto";
@Injectable()
export class EatDailyService {
  constructor(
    @InjectModel('EatDaily') private EatDailyModel: Model<EatDaily>,
  ) {}
  async create(CreateEatDailyDTO: CreateEatDailyDTO): Promise<any> {
    const createdCat = new this.EatDailyModel(CreateEatDailyDTO);
    return createdCat.save();
  }
  async findAll(user): Promise<any> {
    return await this.EatDailyModel.find({ user: user }).exec();
  }
  async findById(id): Promise<EatDaily> {
    const customer = await this.EatDailyModel.findById(id).exec();
    return customer;
  }
  async find(req): Promise<any> {
    return await this.EatDailyModel.find(req).exec();
  }
  async update(id, CreateEatDailyDTO: CreateEatDailyDTO): Promise<any> {
    return await this.EatDailyModel.findByIdAndUpdate(id, CreateEatDailyDTO, {
      new: true,
    });
  }
  async delete(id): Promise<any> {
    return await this.EatDailyModel.findByIdAndRemove(id);
  }
}
