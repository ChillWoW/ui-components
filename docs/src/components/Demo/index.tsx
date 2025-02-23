import { Card, Text, Tooltip } from "@/components/ui";
import { IconCopy } from "@tabler/icons-react";
import { useRef } from "react";
import { Highlight, themes } from "prism-react-renderer";

interface CodeDemoProps {
    code: string;
    controls?: React.ReactNode;
    language?: "typescript" | "tsx" | "javascript";
}

export const CodeDemo = ({
    code,
    controls,
    language = "tsx"
}: CodeDemoProps) => {
    const preRef = useRef<HTMLPreElement>(null);

    return (
        <div className="flex flex-col gap-4">
            {controls && (
                <Card className="bg-gradient-to-br from-[#1a1b1e] to-[#2c2e33] border-[#3e4249]/50 backdrop-blur-sm p-4">
                    <div className="flex flex-col gap-2">{controls}</div>
                </Card>
            )}

            <div className="relative group">
                <Text weight="semibold">Code</Text>
                <Highlight
                    code={code}
                    language={language}
                    theme={themes.vsDark}
                >
                    {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps
                    }) => (
                        <pre
                            ref={preRef}
                            className={`${className} relative rounded-lg p-4 overflow-x-auto bg-[#1e1e1e] border border-[#3e4249]/50 backdrop-blur-sm`}
                            style={style}
                        >
                            {tokens.map((line, i) => {
                                const { key, ...lineProps } = getLineProps({
                                    line
                                });
                                return (
                                    <div key={i} {...lineProps}>
                                        {line.map((token, j) => {
                                            const { key, ...tokenProps } =
                                                getTokenProps({ token });
                                            return (
                                                <span key={j} {...tokenProps} />
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </pre>
                    )}
                </Highlight>
                <button
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200 p-2 rounded-lg bg-[#252627]/50 hover:bg-[#333538]/50 backdrop-blur-sm border border-[#3e4249]/30"
                    onClick={() => navigator.clipboard.writeText(code)}
                >
                    <Tooltip label="Copy">
                        <IconCopy size={16} className="text-white" />
                    </Tooltip>
                </button>
            </div>
        </div>
    );
};
