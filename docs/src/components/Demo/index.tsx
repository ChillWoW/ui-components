import { Card, Tooltip } from "@/components/ui";
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
                <Card className="bg-[#1e1e1e] p-4">
                    <div className="flex flex-col gap-2">{controls}</div>
                </Card>
            )}

            <div className="relative group">
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
                            className={`${className} rounded-lg p-4 overflow-x-auto`}
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
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded"
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
