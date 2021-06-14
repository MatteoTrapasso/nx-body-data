import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meal } from './interfaces/meal.interface';
import { CreateMealDTO } from './dto/meal.dto';
@Injectable()
export class MealService {
  constructor(
    @InjectModel('Meal') private MealModel: Model<Meal>,
  ) {}
  async create(CreateMealDTO: CreateMealDTO): Promise<any> {
    const createdCat = new this.MealModel(CreateMealDTO);
    return createdCat.save();
  }
  async findAll(user): Promise<any> {
    return await this.MealModel.find({ user: user }).exec();
  }
  async findById(id): Promise<Meal> {
    const customer = await this.MealModel.findById(id).exec();
    return customer;
  }
  async find(req): Promise<any> {
    return await this.MealModel.find(req).exec();
  }
  async update(id, CreateMealDTO: CreateMealDTO): Promise<any> {
    return await this.MealModel.findByIdAndUpdate(id, CreateMealDTO, {
      new: true,
    });
  }
  async delete(id): Promise<any> {
    return await this.MealModel.findByIdAndRemove(id);
  }
}
