export class Eat {
  public _id: string = undefined;
  public kcal: number = undefined;
  public date: string = undefined;
  public user: string = undefined;
  static selectId: (item: Eat) => string = item => item._id;
}
