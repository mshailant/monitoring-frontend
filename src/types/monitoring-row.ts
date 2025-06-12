export type MonitoringRow = {
    complexId: number
    complexName: string
    companyName: string
    country: string
    status: 'online' | 'offline'
    checkedAt: string
}