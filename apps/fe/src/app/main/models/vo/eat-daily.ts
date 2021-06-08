export class EatDaily {
  public _id: string = undefined;
  public kcal: number = undefined;
  public date: string = undefined;
  public user: string = undefined;
  static selectId: (item: EatDaily) => string = item => item._id;
}
