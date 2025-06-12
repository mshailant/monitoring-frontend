export type MonitoringStatus = {
    complexId: number
    complexName: string
    companyName: string
    country: string
    status: 'online' | 'offline'
    checkedAt: string
    ipWan: string
    onlinePercentageLast7Days: string
}