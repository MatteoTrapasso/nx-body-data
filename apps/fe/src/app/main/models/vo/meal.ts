import {Food} from "@models/vo/food";

export class Meal {
    public _id: string = undefined;
    public type: string = undefined;
    public time: string = undefined;
    public menu: MenuItem[] = undefined;
    public date: string = undefined;
    public user: string = undefined;
  static selectId: (item: Meal) => string = item => item._id;
}

export class MenuItem {
  food: Food
  qty = 0
}
