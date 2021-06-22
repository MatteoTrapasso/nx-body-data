import {Food} from "@models/vo/food";

export class Meal {
    public _id: string = undefined;
    public type: string = undefined;
    public time: Date = new Date();
    public menu: MenuItem[] = undefined;
    public date: string = undefined;
    public user: string = undefined;
  static selectId: (item: Meal) => string = item => item._id;
}

export class MenuItem {
  food: Food = {_id:'',Food_Code:'',Food_Name_ITA:'',Available_carbohydrates_MSE:0,Total_fat:0,Total_protein:0,Energy_Rec_with_fibre:0}
  qty = 0
}
