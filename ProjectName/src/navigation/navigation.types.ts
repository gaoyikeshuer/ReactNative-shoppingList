export type NavigationType = {
  navigate: (value: string) => void;
};
export type StackParamList = {
    Home: undefined;
    Payments:{payeeName:string} | undefined;
    Accounts:undefined;
    Settings:undefined
  }