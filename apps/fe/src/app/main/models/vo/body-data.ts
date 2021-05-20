export class BodyData {
  public _id: string = undefined;
  public height: number = undefined;
  public weight: number = undefined;
  public date: string = undefined;
  public user: string = undefined;
  static selectId: (item: BodyData) => string = item => item._id;
}
