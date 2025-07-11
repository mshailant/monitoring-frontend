'use client'

import {useAuth} from "@/hooks/use-auth";

export default function DashboardPage() {
    const {user} = useAuth()

    return (
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl">Dashboard</div>
            <div className="bg-muted/50 aspect-video rounded-xl"/>
            <div className="bg-muted/50 aspect-video rounded-xl"/>
        </div>
    )
}
