import {z} from 'zod';

export const validationSchema = z.object({
  toPayee: z.string().min(1, {message: 'to payee name is required'}),
  statementMessage: z
    .string()
    .min(1, {message: 'statement messages are required'}),
  payeeMessage: z.string().min(1, {message: 'statement messages are required'}),
  amountToSend: z.coerce
    .number()
    .min(0.01, {message: 'amount must be more than 0.01'})
    .max(1000, {message: 'amount must be less than 1000'}),
});
