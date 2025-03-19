"use client";
import ComponentCard from "@/components/ComponentCard";
import { Text } from "@/components/ui/Text";

export default function Home() {
  return (
    <div className="bg-dark-900 min-h-screen w-full">
      <header className="border-b border-dark-600 p-6">
        <Text size="xl" weight="bold" align="center">
          UI Component Library
        </Text>
      </header>

      <main>
        <ComponentCard />
      </main>
    </div>
  );
}
