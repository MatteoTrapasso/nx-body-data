  export class Meal {
  public _id: string = undefined;
  public food: string = undefined;
  public date: string = undefined;
  public user: string = undefined;
  static selectId: (item: Meal) => string = item => item._id;
}

