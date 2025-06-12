"use client"

import { columns } from "./columns"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Table as ReactTable } from "@tanstack/react-table"
import { MonitoringStatus } from "@/types/monitoring-status"
import { DataTableSkeleton } from "@/components/skeletons/data-table-skeleton"
import {useMonitoringStatus} from "@/hooks/use-server-status";
import {MonitoringStatusDataTable} from "@/components/tables/server-status-data-table";

export default function MonitoringPage() {
    const { statuses, loading, error } = useMonitoringStatus()
    const [table, setTable] = useState<ReactTable<MonitoringStatus> | null>(null)
    const [searchValue, setSearchValue] = useState("")

    // Sincroniza el input con el filtro global
    useEffect(() => {
        if (table) {
            table.setGlobalFilter(searchValue)
        }
    }, [searchValue, table])

    return (
        <div className="flex flex-col min-h-screen px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Server Status</h1>

            {table && (
                <div className="mb-4 flex items-center gap-4">
                    <Input
                        placeholder="Search by complex, company, or country..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="w-96"
                    />
                </div>
            )}

            {loading && <DataTableSkeleton columns={columns.length} rows={10} />}
            {error && <p className="text-red-600">Error: {error.message}</p>}

            {!loading && !error && (
                <MonitoringStatusDataTable
                    columns={columns}
                    data={statuses}
                    onTableInit={setTable}
                />
            )}
        </div>
    )
}
