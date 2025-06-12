import { useEffect, useState } from "react"
import { getDomains } from "@/lib/domains"
import {DomainCheck} from "@/types/domain-check";


export function useDomains() {
    const [domains, setDomains] = useState<DomainCheck[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        getDomains()
            .then((data) => {
                setDomains(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }, [])

    return { domains, loading, error }
}
