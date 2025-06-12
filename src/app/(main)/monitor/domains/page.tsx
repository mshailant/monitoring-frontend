"use client"

import { useDomains } from "@/hooks/use-domains"
import { columns } from "./columns"
import { DomainDataTable } from "@/components/tables/domain-data-table"
import { Input } from "@/components/ui/input"
import {useEffect, useState} from "react"
import { Table as ReactTable } from "@tanstack/react-table"
import { DomainCheck } from "@/types/domain-check"
import {DataTableSkeleton} from "@/components/skeletons/data-table-skeleton";

export default function DomainsPage() {
    const { domains, loading, error } = useDomains()
    const [table, setTable] = useState<ReactTable<DomainCheck> | null>(null)
    const [searchValue, setSearchValue] = useState("")

    // Sincroniza el input con el filtro global
    useEffect(() => {
        if (table) {
            table.setGlobalFilter(searchValue)
        }
    }, [searchValue, table])


    return (
        <div className="flex flex-col min-h-screen px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Domains</h1>

            {table && (
                <div className="mb-4 flex items-center gap-4">
                    <Input
                        placeholder="Search for a domain, complex, or company..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="w-96"
                    />
                </div>
            )}

            {loading && <DataTableSkeleton columns={columns.length} rows={10} />}
            {error && <p className="text-red-600">Error: {error.message}</p>}

            {!loading && !error && (
                <DomainDataTable columns={columns} data={domains} onTableInit={setTable} />
            )}
        </div>
    )
}
