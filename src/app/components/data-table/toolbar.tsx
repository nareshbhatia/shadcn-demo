import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { DataTableViewOptions } from './data-table-view-options';
import { statusLookups } from './lookups';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/icons';
import type { Table } from '@tanstack/react-table';

interface ToolbarProps<TData> {
  table: Table<TData>;
}

export function Toolbar<TData>({ table }: ToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          className="h-8 w-[150px] lg:w-[250px]"
          onChange={(event) =>
            table.getColumn('email')?.setFilterValue(event.target.value)
          }
          placeholder="Filter emails..."
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
        />
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            options={statusLookups}
            title="Status"
          />
        )}
        {isFiltered ? (
          <Button
            className="h-8 px-2 lg:px-3"
            onClick={() => {
              table.resetColumnFilters();
            }}
            variant="ghost"
          >
            Reset
            <Icons.x className="ml-2 size-4" />
          </Button>
        ) : undefined}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
