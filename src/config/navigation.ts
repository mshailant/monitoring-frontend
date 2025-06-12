import {
    AudioWaveform,
    Command,
    GalleryVerticalEnd,
    Monitor,
    LayoutDashboard,
    Server,
    Globe,
} from "lucide-react"

export const navigationData = {
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
            isActive: true,
            chevron: true,
        },
        {
            title: "Monitoring",
            url: "",
            icon: Monitor,
            items: [
                {
                    title: "Servers",
                    url: "/monitor/servers",
                    icon: Server,
                },
                {
                    title: "Domains",
                    url: "/monitor/domains",
                    icon: Globe,
                },
            ],
        },
    ],
}
