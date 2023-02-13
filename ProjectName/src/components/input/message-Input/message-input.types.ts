import {UseControllerProps} from 'react-hook-form';

export interface CustomMessageInputTypes extends UseControllerProps {
  title: string;
  placeholder: string;
  maxLength?: number;
  message?: string;
}
