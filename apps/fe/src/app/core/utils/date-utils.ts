import * as dayjs from "dayjs";

export function getBaseDate(date:dayjs.ConfigType){
  return dayjs(date).format('YYYY-MM-DD')
}
