'use client';

import { columns } from './columns';
import type { Payment } from './models';
import { PaymentStatus } from './models';
import { PaymentTable } from './payment-table';
import { DocPath } from '@/components/doc-path';
import { Heading1 } from '@/components/heading1';
import { Heading2 } from '@/components/heading2';
import { findSidebarNavItem } from '@/config/sidebar-nav';
import { faker } from '@faker-js/faker';

faker.seed(42);

const payments: Payment[] = Array.from(Array(100)).map(() => ({
  id: `PMT-${faker.number.int({ min: 100, max: 999 })}`,
  amount: faker.number.int({ min: 1, max: 100 }),
  status: faker.helpers.enumValue(PaymentStatus),
  email: faker.internet.email(),
}));

export default function DataTableDocs() {
  const sidebarNavItem = findSidebarNavItem(['Components', 'Data Table']);
  const title = sidebarNavItem ? sidebarNavItem.title : 'Unknown';
  const description = sidebarNavItem ? sidebarNavItem.description : 'Unknown';

  return (
    <>
      <DocPath docTitle={title} />
      <Heading1 description={description} title={title} />
      <p className="mt-4">
        This example is built on top of{' '}
        <a href="https://tanstack.com/table">TanStack Table</a>. However, unlike
        other Shadcn components, there is no wrapper on top of TanStack Table.
        Creating such a wrapper would loose all the flexibility that TanStack
        Table provides. Hence we should start with the basic <code>Table</code>{' '}
        component provided by Shadcn/ui and combine it with TanStack Table. This
        allows us to build any custom table based on our requirements.
      </p>
      <p className="mt-4">
        If you find yourself using the same table in multiple places in your
        app, you can always extract it into a reusable component.
      </p>

      <Heading2>Example</Heading2>
      <PaymentTable columns={columns} data={payments} />
    </>
  );
}
