import {z} from 'zod';

export type PaymentDetailsFormData = {
  toPayee: string;
  amountToSend: string; // must be string cuz inputText only receive string or undefined
  payeeMessage: string;
  statementMessage: string;
};
export const validationSchema = z.object({
  toPayee: z.string().min(1, {message: 'to payee name is required'}),
  statementMessage: z
    .string()
    .min(1, {message: 'statement messages are required'}),
  payeeMessage: z
    .string()
    .min(1, {message: 'statement messages are required'}),
  amountToSend: z.string().min(1).max(6),
});
export type ValidationSchema = z.infer<typeof validationSchema>;