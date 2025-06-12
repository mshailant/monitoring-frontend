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
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
            isActive: true,
            chevron: true,
        },
        {
            title: "Monitor",
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
