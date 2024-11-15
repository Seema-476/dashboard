import { Dashboard, Demand, Dots, Events, Programmes } from "./Icons"

export const SIDEBAR_BUTTON = [
    {
        id: 'tab-1',
        dots: <Dots />,
        sidebarSvg: <Dashboard />,
        text: "Dashboard"
    },
    {
        id: 'tab-2',
        dots: <Dots />,
        sidebarSvg: <Events />,
        text: "Events"
    },
    {
        id: 'tab-3',
        dots: <Dots />,
        sidebarSvg: <Demand />,
        text: "On demand"
    },
    {
        id: 'tab-4',
        dots: <Dots />,
        sidebarSvg: <Programmes />,
        text: "Programmes"
    }
]