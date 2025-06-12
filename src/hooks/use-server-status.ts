import { useEffect, useState } from 'react'
import { MonitoringStatus } from '@/types/monitoring-status'
import {getServerStatus} from "@/lib/server-status";

export function useMonitoringStatus() {
    const [statuses, setStatuses] = useState<MonitoringStatus[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        getServerStatus()
            .then((data) => {
                setStatuses(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }, [])

    return { statuses, loading, error }
}
