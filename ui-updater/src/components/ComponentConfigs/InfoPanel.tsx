import React from "react";
import { Text, Card } from "@/components/ui";

export type PropInfo = {
  type: string;
  default?: any;
  description?: string;
  required?: boolean;
  possibleValues?: string[];
  properties?: {
    [key: string]: {
      type: string;
      description?: string;
      default?: any;
    };
  };
};

export type PropInfoMap = {
  [key: string]: PropInfo;
};

interface InfoPanelProps {
  propInfo: PropInfoMap;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ propInfo }) => {
  return (
    <div className="w-full space-y-4">
      {Object.entries(propInfo).map(([propName, info]) => (
        <Card key={propName} className="p-3 bg-dark-800 border border-dark-600">
          <Text size="sm" weight="bold" className="text-white mb-1">
            {propName}
            {info.required && <span className="text-red-500 ml-1">*</span>}
          </Text>

          <div className="flex flex-col gap-1">
            <Text size="xs" className="text-gray-400">
              Type: <span className="text-blue-400">{info.type}</span>
            </Text>

            {info.default !== undefined && (
              <Text size="xs" className="text-gray-400">
                Default:{" "}
                <code className="bg-dark-700 px-1 py-0.5 rounded">
                  {String(info.default)}
                </code>
              </Text>
            )}

            {info.description && (
              <Text size="xs" className="text-gray-400 mt-1">
                {info.description}
              </Text>
            )}

            {info.possibleValues && (
              <div className="mt-1">
                <Text size="xs" className="text-gray-400">
                  Possible values:
                </Text>
                <div className="flex flex-wrap gap-1 mt-1">
                  {info.possibleValues.map((value: string) => (
                    <code
                      key={value}
                      className="bg-dark-700 px-1.5 py-0.5 rounded text-xs"
                    >
                      {value}
                    </code>
                  ))}
                </div>
              </div>
            )}

            {info.properties && (
              <div className="mt-2">
                <Text size="xs" className="text-gray-400 font-semibold">
                  Properties:
                </Text>
                <div className="ml-2 mt-1 border-l-2 border-dark-600 pl-2 space-y-2">
                  {Object.entries(info.properties).map(
                    ([propName, propInfo]) => (
                      <div key={propName} className="space-y-0.5">
                        <Text size="xs" className="text-gray-300">
                          {propName}:
                        </Text>
                        <div className="ml-2">
                          <Text size="xs" className="text-gray-400">
                            Type:{" "}
                            <span className="text-blue-400">
                              {propInfo.type}
                            </span>
                          </Text>
                          {propInfo.description && (
                            <Text size="xs" className="text-gray-400">
                              {propInfo.description}
                            </Text>
                          )}
                          {propInfo.default !== undefined && (
                            <Text size="xs" className="text-gray-400">
                              Default:{" "}
                              <code className="bg-dark-700 px-1 py-0.5 rounded">
                                {String(propInfo.default)}
                              </code>
                            </Text>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};
