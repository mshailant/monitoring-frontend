import { ColumnDef } from "@tanstack/react-table"
import {DomainCheck} from "@/types/domain-check";
import {DomainState} from "@/enums/domain-state";
import {ExternalLink} from "lucide-react";

export const columns: ColumnDef<DomainCheck>[] = [
    {
        accessorKey: "complex.company.name",
        header: "Company",
        cell: ({ row }) => row.original.complex?.company?.name || "-",
    },
    {
        accessorKey: "complex.name",
        header: "Complex",
        cell: ({ row }) => row.original.complex?.name || "-",
    },
    {
        accessorKey: "domain",
        header: "Domain",
        enableColumnFilter: true,
        cell: ({ row }) => {
            const domain = row.getValue("domain") as string
            const url = row.original.complex.web

            return (
                <div className="flex items-center gap-2">
                    <span>{domain}</span>
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
        accessorKey: "state",
        header: "Status",
        cell: ({ row }) => {
            const state = row.getValue("state") as DomainState

            const color =
                state === DomainState.EXPIRED
                    ? "text-red-500"
                    : state === DomainState.EXPIRING_SOON
                        ? "text-yellow-500"
                        : state === DomainState.NO_DATA
                            ? "text-gray-500"
                            : "text-green-500"

            return <span className={`font-semibold ${color}`}>{state}</span>
        },
    },
    {
        accessorKey: "registrant",
        header: "Registrant",
        cell: ({ row }) => {
            const value = row.getValue("registrant") as string
            return <div className="truncate w-[200px]">{value || "-"}</div>
        },
    },

    {
        accessorKey: "expiration",
        header: "Expiration",
        cell: ({ row }) => {
            const exp = row.getValue("expiration")
            return exp ? new Date(exp as string).toLocaleDateString() : "-"
        },
    },
    {
        accessorKey: "checkedAt",
        header: "Last verification",
        cell: ({ row }) => {
            const checkedAt = row.getValue("checkedAt")
            return checkedAt ? new Date(checkedAt as string).toLocaleString() : "-"
        },
    },
]