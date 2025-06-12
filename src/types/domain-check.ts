import {Complex} from "@/types/complex";

export type DomainCheck = {
    id: number
    domain: string
    registrant: string
    expiration: string
    state: string
    checkedAt: string
    complexId: number
    complex: Complex
}
