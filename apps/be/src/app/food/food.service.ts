import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Food } from './interfaces/food.interface';
import { CreateFoodDTO } from './dto/food.dto';
@Injectable()
export class FoodService {
  constructor(
    @InjectModel('Food') private FoodModel: Model<Food>,
  ) {}
  async create(CreateFoodDTO: CreateFoodDTO): Promise<any> {
    const createdCat = new this.FoodModel(CreateFoodDTO);
    return createdCat.save();
  }
  async findAll(user): Promise<any> {
    return await this.FoodModel.find({ user: user }).exec();
  }
  async findById(id): Promise<Food> {
    const customer = await this.FoodModel.findById(id).exec();
    return customer;
  }
  async find(req): Promise<any> {
    return await this.FoodModel.find(req).exec();
  }
  async update(id, CreateFoodDTO: CreateFoodDTO): Promise<any> {
    return await this.FoodModel.findByIdAndUpdate(id, CreateFoodDTO, {
      new: true,
    });
  }
  async delete(id): Promise<any> {
    return await this.FoodModel.findByIdAndRemove(id);
  }
}
