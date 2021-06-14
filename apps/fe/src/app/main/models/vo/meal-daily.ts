export class MealDaily {
  public _id: string = undefined;
  public kcal: number = undefined;
  public date: string = undefined;
  public user: string = undefined;
  static selectId: (item: MealDaily) => string = item => item._id;
}
