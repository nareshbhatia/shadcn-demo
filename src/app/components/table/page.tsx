import { DocPath } from '@/components/doc-path';
import { Heading1 } from '@/components/heading1';
import { Heading2 } from '@/components/heading2';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { findSidebarNavItem } from '@/config/sidebar-nav';
import { formatAsMoney } from '@/lib/utils';
import { faker } from '@faker-js/faker';

enum InvoiceStatus {
  Paid = 'PAID',
  Pending = 'PENDING',
  Unpaid = 'UNPAID',
}

enum PaymentMethod {
  BankTransfer = 'BANK_TRANSFER',
  CreditCard = 'CREDIT_CARD',
  PayPal = 'PAY_PAL',
}

interface Invoice {
  id: string;
  status: InvoiceStatus;
  amount: number;
  paymentMethod: PaymentMethod;
}

faker.seed(42);

const invoices: Invoice[] = Array.from(Array(6)).map(() => ({
  id: `INV-${faker.number.int({ min: 100, max: 999 })}`,
  status: faker.helpers.enumValue(InvoiceStatus),
  amount: faker.number.int({ min: 1, max: 100 }),
  paymentMethod: faker.helpers.enumValue(PaymentMethod),
}));

const total = invoices.reduce(
  (accumulator, currentValue) => accumulator + currentValue.amount,
  0,
);

const statusLookups: { value: InvoiceStatus; label: string }[] = [
  {
    value: InvoiceStatus.Pending,
    label: 'Pending',
  },
  {
    value: InvoiceStatus.Paid,
    label: 'Paid',
  },
  {
    value: InvoiceStatus.Unpaid,
    label: 'Unpaid',
  },
];

function getStatusLabel(status: InvoiceStatus) {
  const lookup = statusLookups.find((lookup) => lookup.value === status);
  return lookup ? lookup.label : status;
}

const paymentMethodLookups: { value: PaymentMethod; label: string }[] = [
  {
    value: PaymentMethod.BankTransfer,
    label: 'Bank Transfer',
  },
  {
    value: PaymentMethod.CreditCard,
    label: 'Credit Card',
  },
  {
    value: PaymentMethod.PayPal,
    label: 'PayPal',
  },
];

function getPaymentMethodLabel(method: PaymentMethod) {
  const lookup = paymentMethodLookups.find((lookup) => lookup.value === method);
  return lookup ? lookup.label : method;
}

export default function TableDocs() {
  const sidebarNavItem = findSidebarNavItem(['Components', 'Table']);
  const title = sidebarNavItem ? sidebarNavItem.title : 'Unknown';
  const description = sidebarNavItem ? sidebarNavItem.description : 'Unknown';

  return (
    <>
      <DocPath docTitle={title} />
      <Heading1 description={description} title={title} />

      <Heading2>Example</Heading2>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{getStatusLabel(invoice.status)}</TableCell>
              <TableCell>
                {getPaymentMethodLabel(invoice.paymentMethod)}
              </TableCell>
              <TableCell className="text-right">
                {formatAsMoney(invoice.amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{formatAsMoney(total)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
