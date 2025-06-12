import {Company} from "@/types/company";

export type Complex = {
    id: number
    name: string
    ultracineId: number | null
    country: string
    ipWan: string
    webVersion: string
    web: string
    ssh: string
    backup: boolean
    companyId: number
    createdAt: string
    company: Company
}
