import { AiOutlineHome } from "solid-icons/ai";
import { IconTypes } from "solid-icons";
import { CgMoreO, CgProfile } from "solid-icons/cg";
import { IoNotificationsCircleOutline } from "solid-icons/io";
import { RiMapCompassDiscoverLine } from "solid-icons/ri";

interface ILinks {
    name: string,
    href: string,
    icon: IconTypes
}

const ICONSIZE = 24

export const links: ILinks[] = [
    {
        name: "Home",
        href: "/",
        icon: () => <AiOutlineHome size={ICONSIZE} />
    },
    {
        name: "Profile",
        href: "/profile",
        icon: () => <CgProfile size={ICONSIZE} />
    },
    {
        name: "More",
        href: "/more",
        icon: () => <CgMoreO size={ICONSIZE} />
    },
    {
        name: "Notification",
        href: "/notification",
        icon: () => <IoNotificationsCircleOutline size={ICONSIZE} />
    },
    {
        name: "Discover",
        href: "/discover",
        icon: () => <RiMapCompassDiscoverLine size={ICONSIZE} />
    }
]