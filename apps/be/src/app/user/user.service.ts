import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from "./interfaces/user.interface";
import {CreateUserDTO} from "./dto/user.dto";
@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private UserModel: Model<User>,
  ) {}
  async create(CreateUserDTO: CreateUserDTO): Promise<any> {
    const createdCat = new this.UserModel(CreateUserDTO);
    return createdCat.save();
  }
  async findAll(user): Promise<any> {
    return await this.UserModel.find({ user: user }).exec();
  }
  async findById(id): Promise<User> {
    const customer = await this.UserModel.findById(id).exec();
    return customer;
  }
  async find(req): Promise<any> {
    return await this.UserModel.find(req).exec();
  }
  async update(id, CreateUserDTO: CreateUserDTO): Promise<any> {
    return await this.UserModel.findByIdAndUpdate(id, CreateUserDTO, {
      new: true,
    });
  }
  async delete(id): Promise<any> {
    return await this.UserModel.findByIdAndRemove(id);
  }
}
