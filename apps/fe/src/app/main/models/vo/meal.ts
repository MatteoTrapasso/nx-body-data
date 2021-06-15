import {Food} from "@models/vo/food";

export class Meal {
    public _id: string = undefined;
    public type: string = undefined;
    public time: string = undefined;
    public foods: {
      food: Food
      qty: number
    }[] = undefined;
    public date: string = undefined;
    public user: string = undefined;
  static selectId: (item: Meal) => string = item => item._id;
}

