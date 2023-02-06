import {Control, FieldPath} from 'react-hook-form';

import {PaymentDetailsFormData} from '../../payment-details-form.types';

export type CustomMessageInputTypes = {
  control: Control<PaymentDetailsFormData>;
  name: FieldPath<PaymentDetailsFormData>;
  title: string;
  placeholder: string;
  maxLength?: number;
};
