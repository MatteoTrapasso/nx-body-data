export class Food {
  public _id: string = undefined;
  public Food_Code: string = undefined;
  static selectId: (item: Food) => string = item => item._id;
}
