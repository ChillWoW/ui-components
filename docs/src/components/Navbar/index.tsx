"use client";

import { cn, IconButton, Text } from "@/components/ui";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { IconBrandGithub } from "@tabler/icons-react";

interface LinkItem {
    link: string;
    icon: React.ReactNode;
}

const linkItems: LinkItem[] = [
    {
        link: "https://github.com/chillwow",
        icon: <IconBrandGithub size={18} />
    }
];

export const Navbar = () => {
    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 h-16 bg-dark-800",
                "flex items-center justify-between",
                "z-50 border-b border-[#3e4249]"
            )}
        >
            <Link href="/" className="flex items-center justify-center">
                <img src={logo.src} alt="Logo" className="h-[90px] w-[90px]" />
                <Text size="lg" className="text-white font-semibold">
                    Flue
                </Text>
            </Link>
            <div className="flex items-center justify-center gap-4 mr-4">
                {linkItems.map((item) => (
                    <IconButton size="xs" key={item.link}>
                        <Link href={item.link} target="_blank">
                            {item.icon}
                        </Link>
                    </IconButton>
                ))}
            </div>
        </nav>
    );
};
