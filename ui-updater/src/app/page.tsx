"use client";
import ComponentCard from "@/components/ComponentCard";

export default function Home() {
    return (
        <div className="bg-dark-900 min-h-screen w-full">
            <div className="mx-auto">
                <div className="flex">
                    <main className="flex-1">
                        <ComponentCard />
                    </main>
                </div>
            </div>
        </div>
    );
}
