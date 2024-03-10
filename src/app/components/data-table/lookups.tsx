import { PaymentStatus } from './models';
import { Icons } from '@/icons';

export const statusLookups = [
  {
    value: PaymentStatus.Pending,
    label: 'Pending',
    icon: Icons.helpCircle,
  },
  {
    value: PaymentStatus.Processing,
    label: 'Processing',
    icon: Icons.timer,
  },
  {
    value: PaymentStatus.Success,
    label: 'Success',
    icon: Icons.checkCircle,
  },
  {
    value: PaymentStatus.Failed,
    label: 'Failed',
    icon: Icons.xCircle,
  },
];
