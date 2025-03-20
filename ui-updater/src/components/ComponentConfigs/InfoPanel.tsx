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
    <div className="w-full space-y-3">
      {Object.entries(propInfo).map(([propName, info]) => (
        <Card
          key={propName}
          className="p-3 bg-dark-800 border border-dark-600 shadow-sm"
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            <Text size="sm" weight="bold" className="text-white">
              {propName}
            </Text>
            {info.required && (
              <span className="text-red-500 text-xs font-bold">*</span>
            )}
            <span className="bg-dark-600 px-1.5 py-0.5 rounded text-xs text-blue-400 ml-auto">
              {info.type}
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {info.description && (
              <Text size="xs" className="text-gray-300 leading-tight">
                {info.description}
              </Text>
            )}

            <div className="flex flex-wrap items-center gap-2 text-xs">
              {info.default !== undefined && (
                <span className="inline-flex items-center text-gray-400">
                  Default:{" "}
                  <code className="ml-1 bg-dark-700 px-1 rounded text-teal-300">
                    {String(info.default)}
                  </code>
                </span>
              )}

              {info.possibleValues && info.possibleValues.length > 0 && (
                <span className="inline-flex items-center flex-wrap text-gray-400">
                  Options:
                  <span className="flex flex-wrap gap-1 ml-1">
                    {info.possibleValues.map((value: string) => (
                      <code
                        key={value}
                        className="bg-dark-700 px-1 rounded text-purple-300"
                      >
                        {value}
                      </code>
                    ))}
                  </span>
                </span>
              )}
            </div>

            {info.properties && (
              <div className="mt-2 pt-1.5 border-t border-dark-600">
                <details className="text-xs">
                  <summary className="text-gray-300 font-medium cursor-pointer hover:text-gray-200">
                    Properties
                  </summary>
                  <div className="mt-1.5 ml-2 pl-2 border-l border-dark-500 space-y-2">
                    {Object.entries(info.properties).map(
                      ([propName, propInfo]) => (
                        <div
                          key={propName}
                          className="bg-dark-700 rounded p-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium">
                              {propName}
                            </span>
                            <span className="bg-dark-600 px-1 rounded text-xs text-blue-400">
                              {propInfo.type}
                            </span>
                          </div>

                          {propInfo.description && (
                            <Text
                              size="xs"
                              className="text-gray-300 mt-0.5 leading-tight"
                            >
                              {propInfo.description}
                            </Text>
                          )}

                          {propInfo.default !== undefined && (
                            <div className="flex items-center mt-0.5">
                              <span className="text-gray-400 text-xs">
                                Default:
                              </span>
                              <code className="ml-1 bg-dark-600 px-1 rounded text-xs text-teal-300">
                                {String(propInfo.default)}
                              </code>
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </details>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};
