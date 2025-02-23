"use client";

import { Navbar } from "@/components/Navbar";
import { Button, Text } from "@/components/ui";
import { Rating } from "@/components/ui/Rating";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [rating, setRating] = useState(0);

    return (
        <main className="min-h-screen bg-dark-900 flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center p-4 gap-2">
                <div>
                    <Text
                        align="center"
                        size="xl"
                        weight="bold"
                        className="text-white"
                    >
                        A simple, yet powerful way to make websites fast in
                        React
                    </Text>
                    <Text align="center" size="md" className="text-white">
                        Flue is a React library designed to make making websites
                        way easier
                    </Text>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Link href="/components">
                        <Button
                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                            size="lg"
                        >
                            Get Started
                        </Button>
                    </Link>
                    <Link href="/components">
                        <Button
                            leftSection={<IconBrandGithub size={18} />}
                            size="lg"
                        >
                            Github
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
