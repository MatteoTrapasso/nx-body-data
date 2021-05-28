export class User {
  public _id: string = undefined;
  public bDate: string = undefined;
  public height: number = undefined;
  public gender: string = undefined;
  public nickname: string = undefined;
  public user: string = undefined;
  static selectId: (item: User) => string = item => item._id;
}
