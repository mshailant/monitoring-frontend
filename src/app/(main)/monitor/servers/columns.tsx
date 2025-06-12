import {MonitoringRow} from "@/types/monitoring-row";
import {ColumnDef} from "@tanstack/react-table";

export const columns: ColumnDef<MonitoringRow>[] = [
    {
        accessorKey: 'companyName',
        header: 'Company',
    },
    {
        accessorKey: 'complexName',
        header: 'Complex',
    },
    {
        accessorKey: 'country',
        header: 'Country',
    },
    {
        accessorKey: 'status',
        header: 'Estatus',
        cell: ({ row }) => {
            const status = row.getValue<'online' | 'offline'>('status')
            return (
                <span className={status === 'online' ? 'text-green-600' : 'text-red-600'}>
          {status.toUpperCase()}
        </span>
            )
        },
    },
    {
        accessorKey: 'checkedAt',
        header: 'Last verification',
        cell: ({ row }) => {
            const date = new Date(row.getValue('checkedAt'))
            return date.toLocaleString('es-AR')
        },
    },
]