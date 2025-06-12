'use client'

import {usePathname} from 'next/navigation'
import {AppSidebar} from "@/components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger
} from "@/components/ui/sidebar"
import {Separator} from "@/components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem, BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from 'react'
import {AuthProvider} from "@/providers/AuthProvider";
import AuthGuard from '@/components/auth-guard'
import Link from "next/link";
import {getBreadcrumbSegmentsFromNavigation} from "@/lib/get-breadcums";

export default function MainLayout({children}: { children: React.ReactNode }) {
    const pathname = usePathname()
    const breadcrumbItems = getBreadcrumbSegmentsFromNavigation(pathname)

    return (
        <SidebarProvider>
            <AuthProvider>
                <AuthGuard>
                    <AppSidebar/>
                    <SidebarInset>
                        <header
                            className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                            <div className="flex items-center gap-2 px-4">
                                <SidebarTrigger className="-ml-1"/>
                                <Separator
                                    orientation="vertical"
                                    className="mr-2 data-[orientation=vertical]:h-4"
                                />
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        {breadcrumbItems.map((item, index) => (
                                            <>
                                                {index > 0 && (
                                                    <BreadcrumbSeparator/>
                                                )}
                                                <BreadcrumbItem>
                                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                                </BreadcrumbItem>
                                            </>
                                        ))}
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>
                        </header>
                        <div className="flex-1 overflow-auto px-4 pb-4 pt-0 flex flex-col">
                            {children}
                        </div>
                    </SidebarInset>
                </AuthGuard>
            </AuthProvider>
        </SidebarProvider>
    )
}

