export class Food {
  public _id: string = undefined;
  static selectId: (item: Food) => string = item => item._id;
}
