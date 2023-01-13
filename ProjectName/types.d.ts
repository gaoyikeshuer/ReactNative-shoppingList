export interface Data{
    key: string;
    date:string;
    currency:string;
    name:string;
    number:number;
    type:string;
    month:number
}
export interface DATAtype{
    data:Data[];
    month:number;
    title:string
  }
export interface MonthData{
  month:number;
  data:Data[];
  monthName:string
}
export interface Message{
    id:number,
    text:string
}