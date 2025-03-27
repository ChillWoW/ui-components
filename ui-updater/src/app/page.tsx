"use client";
import ComponentCard from "@/components/ComponentCard";
import { Text } from "@/components/ui/Text";
import {
  IconVersions,
  IconComponents,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="bg-dark-900 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 flex flex-col items-center justify-center">
          <Text size="lg" weight="bold" className="mb-2">
            Component Explorer
          </Text>
          <Text size="sm" className="text-gray-400 max-w-3xl" align="center">
            Select and customize UI components from the library. Preview the
            component and get the code to use in your project. Experiment with
            different props and configurations.
          </Text>
        </div>

        <div className="flex pt-[76px]">
          <main className="flex-1">
            <ComponentCard />
          </main>
        </div>
      </div>
    </div>
  );
}
