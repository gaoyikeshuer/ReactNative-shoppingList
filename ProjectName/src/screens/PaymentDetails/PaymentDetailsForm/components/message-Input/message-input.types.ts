import {FieldPath} from 'react-hook-form';

import {PaymentDetailsFormData} from '../../payment-details-form.types';

export type CustomMessageInputTypes = {
  name: FieldPath<PaymentDetailsFormData>;
  title: string;
  placeholder: string;
  maxLength?: number;
};
