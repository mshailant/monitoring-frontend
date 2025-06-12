import { api } from "./api"
import {DomainCheck} from "@/types/domain-check";

export async function getDomains(): Promise<DomainCheck[]> {
    const res = await api.get("/domain-check")
    return res.data
}