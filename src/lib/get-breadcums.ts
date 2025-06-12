import { navigationData } from "@/config/navigation"

export function getBreadcrumbSegmentsFromNavigation(pathname: string) {
    const breadcrumbs: { href: string; label: string }[] = []

    const normalizedPath = pathname.replace(/\/$/, "") // quitar / final

    // Recorremos navMain
    for (const item of navigationData.navMain) {
        if (item.url === normalizedPath) {
            // caso raíz directo (ej: /dashboard)
            breadcrumbs.push({ href: item.url, label: item.title })
            break
        }

        // caso con subitems (ej: /monitor/servers)
        if (item.items) {
            const match = item.items.find(sub => sub.url === normalizedPath)
            if (match) {
                breadcrumbs.push({ href: "#", label: item.title }) // el padre no tiene URL
                breadcrumbs.push({ href: match.url, label: match.title })
                break
            }
        }
    }

    return breadcrumbs
}
