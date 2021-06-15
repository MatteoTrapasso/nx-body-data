export class Food {
  public _id: string = undefined;
  public Food_Code: string = undefined;
  public Food_Name_ITA: string = undefined;
  public Total_protein: number= undefined;
  public Total_fat: number= undefined;
  static selectId: (item: Food) => string = item => item._id;
}
