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
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(propInfo).map(([propName, info]) => (
        <Card
          key={propName}
          className="p-4 bg-dark-750 border border-dark-600 shadow-sm hover:bg-dark-700 transition-colors"
        >
          <div className="flex items-center gap-2 mb-2 border-b border-dark-500 pb-2">
            <Text size="md" weight="bold" className="text-white">
              {propName}
            </Text>
            {info.required && (
              <span className="text-red-500 text-xs font-bold">required</span>
            )}
            <span className="bg-dark-600 px-2 py-0.5 rounded-full text-xs text-blue-400 ml-auto">
              {info.type}
            </span>
          </div>

          <div className="space-y-3">
            {info.description && (
              <Text size="sm" className="text-gray-300 leading-relaxed">
                {info.description}
              </Text>
            )}

            <div className="flex flex-wrap items-center gap-3">
              {info.default !== undefined && (
                <div className="inline-flex items-center text-gray-400 bg-dark-800 px-2 py-1 rounded">
                  <span className="text-xs mr-1">Default:</span>
                  <code className="bg-dark-700 px-1.5 py-0.5 rounded text-teal-300 text-xs">
                    {String(info.default)}
                  </code>
                </div>
              )}

              {info.possibleValues && info.possibleValues.length > 0 && (
                <div className="bg-dark-800 px-2 py-1 rounded">
                  <span className="text-xs text-gray-400 mr-1">Options:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {info.possibleValues.map((value: string) => (
                      <code
                        key={value}
                        className="bg-dark-700 px-1.5 py-0.5 rounded text-purple-300 text-xs"
                      >
                        {value}
                      </code>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {info.properties && Object.keys(info.properties).length > 0 && (
              <div className="mt-3 pt-2 border-t border-dark-600">
                <details className="text-sm">
                  <summary className="text-gray-300 font-medium cursor-pointer hover:text-gray-200 mb-2">
                    Properties
                  </summary>
                  <div className="grid grid-cols-1 gap-2 ml-2">
                    {Object.entries(info.properties).map(
                      ([propName, propInfo]) => (
                        <div
                          key={propName}
                          className="bg-dark-700 rounded p-2 hover:bg-dark-650 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white font-medium">
                              {propName}
                            </span>
                            <span className="bg-dark-600 px-1.5 py-0.5 rounded-full text-xs text-blue-400">
                              {propInfo.type}
                            </span>
                          </div>

                          {propInfo.description && (
                            <Text
                              size="xs"
                              className="text-gray-300 leading-relaxed"
                            >
                              {propInfo.description}
                            </Text>
                          )}

                          {propInfo.default !== undefined && (
                            <div className="flex items-center mt-1.5">
                              <span className="text-gray-400 text-xs">
                                Default:
                              </span>
                              <code className="ml-1 bg-dark-600 px-1.5 py-0.5 rounded text-xs text-teal-300">
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
