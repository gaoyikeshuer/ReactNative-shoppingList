export type PaymentDetailsFormData = {
  ToPayee: string;
  amountToSend: string; // must be string cuz inputText only receive string or undefined
  payeeMessage: string;
  statementMessage: string;
};
