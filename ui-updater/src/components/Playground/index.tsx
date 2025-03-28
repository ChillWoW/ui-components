import { ReactNode, useState } from "react";
import { PlaygroundPreviewSection } from "./PlaygroundSection";
import ComponentInfo from "@/components/ComponentInfo";
import { Anchor, Button, ButtonGroup, Text } from "@/components/ui";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    a11yLight,
    atomOneDark,
    tomorrowNight
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IconBrandTypescript } from "@tabler/icons-react";

interface PlaygroundProps {
    preview: ReactNode;
    controls: ReactNode;
    exampleCode: string;
}

const PlaygroundPreview = ({
    preview,
    controls,
    exampleCode
}: PlaygroundProps) => {
    const [activeTab, setActiveTab] = useState<"props" | "exampleCode">(
        "props"
    );

    return (
        <div className="flex flex-col gap-2 w-full">
            <Anchor id="playground" showIcon={false}>
                <ComponentInfo title="Playground" />
            </Anchor>
            <div className="flex flex-col md:flex-row gap-2 w-full">
                <div className="w-full md:w-2/4 flex justify-center items-center p-8 bg-dark-700 rounded-md">
                    {preview}
                </div>

                <div className="space-y-6 w-full bg-dark-700 rounded-md p-4">
                    <ButtonGroup fullWidth spacing={15}>
                        <Button
                            variant={
                                activeTab === "props" ? "filled" : "outline"
                            }
                            onClick={() => setActiveTab("props")}
                            className={`bg-dark-700 hover:bg-dark-600 ${
                                activeTab === "props" && "bg-dark-500"
                            }`}
                        >
                            Props
                        </Button>
                        <Button
                            variant={
                                activeTab === "exampleCode"
                                    ? "filled"
                                    : "outline"
                            }
                            onClick={() => setActiveTab("exampleCode")}
                            className={`bg-dark-700 hover:bg-dark-600 ${
                                activeTab === "exampleCode" && "bg-dark-500"
                            }`}
                        >
                            Example code
                        </Button>
                    </ButtonGroup>

                    <div className="space-y-6 w-full">
                        {activeTab === "props" && controls}
                        {activeTab === "exampleCode" && (
                            <div className="flex flex-col">
                                <div className="bg-[#1d1f21] rounded-t-md">
                                    <div className="flex items-center gap-1 h-fit w-fit p-2 bg-dark-600 border border-dark-300 border-t-0 border-l-0 rounded-br-md">
                                        <IconBrandTypescript
                                            size={18}
                                            className="text-blue-500"
                                        />
                                        <p className="text-sm">Demo.tsx</p>
                                    </div>
                                </div>
                                <SyntaxHighlighter
                                    language="tsx"
                                    style={tomorrowNight}
                                    className="rounded-b-md custom-scrollbar"
                                >
                                    {exampleCode}
                                </SyntaxHighlighter>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

PlaygroundPreview.Section = PlaygroundPreviewSection;
PlaygroundPreview.displayName = "PlaygroundPreview";

export default PlaygroundPreview;
