import { ReactNode, useState } from "react";
import { PlaygroundPreviewSection } from "./PlaygroundSection";
import ComponentInfo from "@/components/ComponentInfo";
import { Anchor, Button, ButtonGroup } from "@/components/ui";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    a11yLight,
    atomOneDark,
    tomorrowNight
} from "react-syntax-highlighter/dist/esm/styles/hljs";

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
            <div className="flex gap-2 w-full">
                <div className="w-2/4 flex justify-center items-center p-8 bg-dark-700 rounded-md">
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
                            <SyntaxHighlighter
                                language="tsx"
                                style={tomorrowNight}
                                className="rounded-md custom-scrollbar"
                            >
                                {exampleCode}
                            </SyntaxHighlighter>
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
