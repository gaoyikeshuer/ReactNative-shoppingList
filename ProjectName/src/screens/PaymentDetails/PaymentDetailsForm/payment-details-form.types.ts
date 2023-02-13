import {z} from 'zod';

import {validationSchema} from './payment-details-form.constants';

export type PaymentDetailsFormData = {
  toPayee: string;
  amountToSend: string; // must be string cuz inputText only receive string or undefined
  payeeMessage: string;
  statementMessage: string;
};

export type ValidationSchema = z.infer<typeof validationSchema>;
