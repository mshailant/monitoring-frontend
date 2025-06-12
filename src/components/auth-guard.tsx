'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {useAuth} from "@/hooks/use-auth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const { user, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/auth/login')
        }
    }, [user, isLoading, router])

    if (isLoading || !user) return null // o un spinner

    return <>{children}</>
}
