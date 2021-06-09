import * as dayjs from "dayjs";

export function getBaseDate(date:Date){
  return dayjs(date).format('YYYY-MM-DD')
}
