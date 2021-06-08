import {Meal} from "@models/vo/meal";

export class Eat {
  public _id: string = undefined;
  public kcal: number = undefined;
  public date: string = undefined;
  public user: string = undefined;
  public meals:Meal[] = undefined;
  static selectId: (item: Eat) => string = item => item._id;
}
