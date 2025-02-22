"use client";

import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Text } from "@/components/ui";

export default function Page() {
    return (
        <div className="min-h-screen bg-dark-900">
            <Navbar />
            <Sidebar />
            <main className="pt-16 lg:pl-64">
                <div className="p-6">
                    <Text>Select a component to begin</Text>
                </div>
            </main>
        </div>
    );
}
