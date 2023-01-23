export interface TransactionData {
  key: string;
  date: string;
  currency: string;
  name: string;
  number: number;
  type: string;
  month: number;
}
export interface MonthData {
  month: number;
  data: TransactionData[];
  monthName: string;
}
export interface GroupData {
  data: TransactionData[];
  month: number;
  title: string;
}
