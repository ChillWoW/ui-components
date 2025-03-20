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
    <div className="w-full space-y-5">
      {Object.entries(propInfo).map(([propName, info]) => (
        <Card
          key={propName}
          className="p-4 bg-dark-800 border border-dark-600 shadow-md"
        >
          <div className="flex items-center mb-2">
            <Text size="sm" weight="bold" className="text-white">
              {propName}
            </Text>
            {info.required && (
              <span className="text-red-500 ml-1 text-xs font-bold rounded-full px-1.5">
                required
              </span>
            )}
            <div className="ml-auto">
              <span className="bg-dark-600 px-2 py-0.5 rounded-full text-xs text-blue-400">
                {info.type}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {info.description && (
              <Text size="xs" className="text-gray-300 leading-relaxed">
                {info.description}
              </Text>
            )}

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {info.default !== undefined && (
                <div className="flex items-center">
                  <Text size="xs" className="text-gray-400 mr-1">
                    Default:
                  </Text>
                  <code className="bg-dark-700 px-1.5 py-0.5 rounded text-xs text-teal-300">
                    {String(info.default)}
                  </code>
                </div>
              )}

              {info.possibleValues && info.possibleValues.length > 0 && (
                <div className="flex items-center flex-wrap gap-1">
                  <Text size="xs" className="text-gray-400 mr-1">
                    Options:
                  </Text>
                  <div className="flex flex-wrap gap-1">
                    {info.possibleValues.map((value: string) => (
                      <code
                        key={value}
                        className="bg-dark-700 px-1.5 py-0.5 rounded text-xs text-purple-300"
                      >
                        {value}
                      </code>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {info.properties && (
              <div className="mt-3 pt-2 border-t border-dark-600">
                <Text size="xs" className="text-gray-300 font-semibold mb-2">
                  Properties:
                </Text>
                <div className="ml-2 pl-3 border-l-2 border-dark-500 space-y-3">
                  {Object.entries(info.properties).map(
                    ([propName, propInfo]) => (
                      <div
                        key={propName}
                        className="bg-dark-700 rounded-md p-2"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <Text size="xs" className="text-white font-medium">
                            {propName}
                          </Text>
                          <span className="bg-dark-600 px-1.5 py-0.5 rounded-full text-xs text-blue-400">
                            {propInfo.type}
                          </span>
                        </div>

                        {propInfo.description && (
                          <Text
                            size="xs"
                            className="text-gray-300 mb-1 leading-relaxed"
                          >
                            {propInfo.description}
                          </Text>
                        )}

                        {propInfo.default !== undefined && (
                          <div className="flex items-center">
                            <Text size="xs" className="text-gray-400 mr-1">
                              Default:
                            </Text>
                            <code className="bg-dark-600 px-1.5 py-0.5 rounded text-xs text-teal-300">
                              {String(propInfo.default)}
                            </code>
                          </div>
                        )}
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
