import React from "react";
import { Text, Switch, SelectInput, Table, RadioGroup } from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";

const switchClasses = {
  track: "bg-dark-700",
  thumb: "bg-white",
  checked: {
    track: "bg-blue-600",
    thumb: "bg-white",
  },
};

const selectInputClasses = {
  input: "bg-dark-800",
  dropdown: "bg-dark-700",
  option: "hover:bg-dark-600",
  selectedOption: "bg-dark-600",
};

// Sample data for the table
const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
];

export const tableConfig: ComponentConfigType = {
  defaultProps: {
    striped: true,
    hover: true,
    border: false,
    compact: false,
    showHeader: true,
  },

  renderComponent: (props) => (
    <div className="w-full overflow-x-auto">
      <Table>
        {props.showHeader && (
          <Table.Head>
            <Table.Row>
              <Table.Cell header>#</Table.Cell>
              <Table.Cell header>Name</Table.Cell>
              <Table.Cell header>Email</Table.Cell>
              <Table.Cell header>Role</Table.Cell>
            </Table.Row>
          </Table.Head>
        )}
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.id}</Table.Cell>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  ),

  renderPropsPanel: () => {
    return ({
      props,
      setProps,
    }: {
      props: any;
      setProps: (newProps: any) => void;
    }) => (
      <div className="space-y-4 w-full">
        <Text
          size="md"
          weight="bold"
          align="center"
          className="border-b border-dark-500 pb-1"
        >
          Table Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Show Header
          </Text>
          <Switch
            checked={props.showHeader}
            onChange={(checked) => setProps({ ...props, showHeader: checked })}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        striped: {
          type: "boolean",
          default: false,
          description: "Applies alternating row colors for better readability",
        },
        hover: {
          type: "boolean",
          default: false,
          description: "Applies hover effect to table rows",
        },
        bordered: {
          type: "boolean",
          default: false,
          description: "Adds borders around the table and cells",
        },
        compact: {
          type: "boolean",
          default: false,
          description: "Reduces the padding in cells for a more compact table",
        },
        variant: {
          type: "string",
          default: "default",
          description: "Visual style variant of the table",
          possibleValues: ["default", "dark"],
        },
        verticalAlign: {
          type: "string",
          default: "middle",
          description: "Vertical alignment of cell content",
          possibleValues: ["top", "middle", "bottom"],
        },
        className: {
          type: "string",
          description: "Additional CSS classes to apply to the table",
        },
        classNames: {
          type: "object",
          description: "Custom CSS classes for table elements",
          properties: {
            table: {
              type: "string",
              description: "CSS class for the table element",
            },
            thead: {
              type: "string",
              description: "CSS class for the table head",
            },
            tbody: {
              type: "string",
              description: "CSS class for the table body",
            },
            tr: {
              type: "string",
              description: "CSS class for table rows",
            },
            th: {
              type: "string",
              description: "CSS class for header cells",
            },
            td: {
              type: "string",
              description: "CSS class for table cells",
            },
          },
        },
        children: {
          type: "ReactNode",
          required: true,
          description:
            "Table content, typically Table.Head and Table.Body components",
        },
      }}
    />
  ),
};
