import React, { useState } from "react";
import {
  Button,
  ButtonRadius,
  ButtonSize,
  ButtonVariant,
  ButtonIntent,
} from "@/components/ui/Buttons/Button";
import {
  Anchor,
  Center,
  Code,
  SelectInput,
  Switch,
  Text,
} from "@/components/ui";
import { IconUser, IconUserCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { selectInputClasses, switchClasses } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

export const centerConfig: ComponentConfigType = {
  renderComponent: () => (
    <div className="space-y-12">
      <div>
        <ComponentInfo
          title="Center"
          description="Center for centering content easier within a container."
        />

        <div className="space-y-8">
          <ConfigLabel label="Types" />
          <ConfigCard
            title="Center"
            description="The center component is used to center content within a container."
            anchorId="center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="w-full md:w-1/3 h-64 bg-dark-800 rounded-lg border border-dark-700 shadow-sm overflow-hidden">
                <Center>
                  <div className="flex flex-col items-center gap-2">
                    <IconUser className="w-8 h-8 text-blue-500" />
                    <Text weight="bold">Centered Content</Text>
                    <Text size="sm" className="text-dark-300">
                      Element vertically and horizontally centered
                    </Text>
                  </div>
                </Center>
              </div>
              <div className="w-full md:w-2/3 h-fit bg-dark-900 rounded-lg border border-dark-700 shadow-sm overflow-hidden">
                <Code
                  language="tsx"
                  className="w-full h-full"
                  showLineNumbers={true}
                  theme="dark"
                >
                  {`<Center>
  <div className="flex flex-col items-center gap-2">
    <IconUser className="w-8 h-8 text-blue-500" />
    <Text weight="bold">Centered Content</Text>
    <Text size="sm" className="text-dark-300">
      Element vertically and horizontally centered
    </Text>
  </div>
</Center>`}
                </Code>
              </div>
            </div>
          </ConfigCard>
        </div>
      </div>
    </div>
  ),

  renderStylesAPI: () => (
    <>
      <StylesAPI
        title="API"
        apiData={[
          {
            property: "children",
            description: "The centerable content",
            type: "ReactNode",
          },
        ]}
      />
    </>
  ),
};
