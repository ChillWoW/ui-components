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
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-dark-750 border-b border-dark-600">
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-200">
              Property
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-200">
              Description
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-200">
              Type
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-200">
              Default
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(propInfo).map(([propName, info]) => (
            <tr
              key={propName}
              className="border-b border-dark-600 hover:bg-dark-750 transition-colors"
            >
              <td className="py-3 px-4 text-sm">
                <div className="flex items-center gap-2">
                  <code className="font-mono text-blue-400">{propName}</code>
                  {info.required && (
                    <span className="text-red-500 text-xs font-bold">*</span>
                  )}
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-gray-300">
                {info.description}
                {info.possibleValues && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {info.possibleValues.map((v) => (
                      <span
                        key={v}
                        className="inline-block bg-dark-600 px-2 py-0.5 rounded-md text-xs text-blue-300"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                )}
              </td>
              <td className="py-3 px-4 text-sm">
                <span className="bg-dark-600 px-2 py-1 rounded-md text-xs font-mono text-blue-400">
                  {info.type}
                </span>
              </td>
              <td className="py-3 px-4 text-sm">
                {info.default !== undefined ? (
                  <code className="font-mono text-gray-400">
                    {JSON.stringify(info.default)}
                  </code>
                ) : (
                  <span className="text-gray-500">-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
