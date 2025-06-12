import {ColumnDef} from "@tanstack/react-table"
import {MonitoringStatus} from "@/types/monitoring-status"
import {ExternalLink} from "lucide-react";

export const columns: ColumnDef<MonitoringStatus>[] = [
    {
        accessorKey: "companyName",
        header: "Company",
    },
    {
        accessorKey: "complexName",
        header: "Complex",
    },
    {
        accessorKey: "country",
        header: "Country",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}) => {
            const status = row.getValue<'online' | 'offline'>("status")
            const isOnline = status === "online"

            return (
                <div className="flex items-center gap-2">
          <span
              className={`h-3 w-3 rounded-full ${
                  isOnline ? "bg-green-500" : "bg-red-500"
              }`}
          />
                    <span className="font-bold">
            {isOnline ? "UP" : "DOWN"}
          </span>
                </div>
            )
        },
    },
    {
        accessorKey: 'onlinePercentageLast7Days',
        header: 'Uptime (Last Week)',
        cell: ({ row }) => {
            const value = row.getValue<number>('onlinePercentageLast7Days')
            return `${value}%`
        },
    },
    {
        accessorKey: 'ipWan',
        header: 'IP WAN',
        cell: ({ row }) => {
            const ipWan = row.getValue("ipWan") as string
            const url = row.original.ipWan

            return (
                <div className="flex items-center gap-2">
                    <span>{ipWan}</span>
                    {url && (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            )
        },
    },
    {
        accessorKey: "checkedAt",
        header: "Last verification",
        cell: ({row}) => {
            const date = new Date(row.getValue("checkedAt"))
            return date.toLocaleString("es-AR")
        },
    },
]
