import {api} from "@/lib/api";
import {MonitoringStatus} from "@/types/monitoring-status";

export async function getServerStatus(): Promise<MonitoringStatus[]> {
    const res = await api.get("/monitoring/status")
    return res.data
}