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
      <header className="border-b border-dark-600 p-6 backdrop-blur-sm bg-dark-900/80 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-dark-700 rounded-lg">
              <IconComponents size={24} className="text-blue-400" />
            </div>
            <div className="flex flex-col">
              <Text
                size="xl"
                weight="bold"
                className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
              >
                UI Component Library
              </Text>
              <Text size="sm" className="text-gray-400" italic>
                A work in progress UI library for React with Tailwind CSS
              </Text>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/chillwow/ui-components"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <IconBrandGithub size={20} />
              <Text size="sm">GitHub</Text>
            </a>

            <div className="flex items-center gap-2 bg-dark-700 rounded-lg px-3 py-2">
              <IconVersions size={16} className="text-teal-400" />
              <Text size="sm" className="text-white">
                v0.0.1
              </Text>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Text size="lg" weight="bold" className="mb-2">
            Component Explorer
          </Text>
          <Text size="sm" className="text-gray-400 max-w-3xl">
            Select and customize UI components from the library. Preview the
            component and get the code to use in your project. Experiment with
            different props and configurations.
          </Text>
        </div>

        <main>
          <ComponentCard />
        </main>
      </div>
    </div>
  );
}
