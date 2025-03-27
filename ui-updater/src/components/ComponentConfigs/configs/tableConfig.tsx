import React, { useState } from "react";
import {
  Text,
  Switch,
  Table,
  SelectInput,
  RadioGroup,
  Button,
  NumberInput,
  Alert,
  Badge,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
  IconEdit,
  IconTrash,
  IconSortAscending,
  IconSortDescending,
  IconSelector,
} from "@tabler/icons-react";
import { switchClasses, selectInputClasses } from "./index";

const sampleData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Pending",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah@example.com",
    role: "Viewer",
    status: "Active",
  },
  {
    id: 5,
    name: "Alex Brown",
    email: "alex@example.com",
    role: "Admin",
    status: "Active",
  },
];

// Create a separate component for the table
const TableDemo = ({
  props,
  setProps,
}: {
  props: any;
  setProps: (props: any) => void;
}) => {
  // All hooks are now at the top level of this component
  const [sortedData, setSortedData] = useState([...sampleData]);
  const [sortColumn, setSortColumn] = useState(props.sortColumn);
  const [sortDirection, setSortDirection] = useState(props.sortDirection);

  // Handle sort when a column header is clicked
  const handleSort = (column: string) => {
    if (!props.enableSorting) return;

    const newDirection =
      sortColumn === column
        ? sortDirection === "asc"
          ? "desc"
          : sortDirection === "desc"
          ? null
          : "asc"
        : "asc";

    setSortColumn(column);
    setSortDirection(newDirection);

    if (setProps) {
      setProps({
        ...props,
        sortColumn: column,
        sortDirection: newDirection,
      });
    }

    // Sort the data
    const newSortedData = [...sortedData].sort((a, b) => {
      if (newDirection === null) return 0;

      const valueA = a[column as keyof typeof a];
      const valueB = b[column as keyof typeof b];

      if (newDirection === "asc") {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });

    setSortedData(newDirection === null ? [...sampleData] : newSortedData);
  };

  // Render the status badge
  const renderStatus = (status: string) => {
    const colorMap: Record<string, string> = {
      Active: "green",
      Pending: "yellow",
      Inactive: "red",
    };

    return <Badge color={colorMap[status] || "gray"}>{status}</Badge>;
  };

  // Render action buttons
  const renderActions = () => (
    <div className="flex space-x-2">
      <Button size="xs" variant="subtle" leftSection={<IconEdit size={16} />}>
        Edit
      </Button>
      <Button
        size="xs"
        variant="subtle"
        leftSection={<IconTrash size={16} />}
        color="red"
      >
        Delete
      </Button>
    </div>
  );

  return (
    <div className="w-full overflow-x-auto">
      {props.enableSearch && (
        <div className="my-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded bg-dark-800 border-dark-600 text-white"
          />
        </div>
      )}

      <Table
        striped={props.striped}
        hover={props.hover}
        bordered={props.bordered}
        compact={props.compact}
        sticky={props.sticky}
        sortable={props.sortable}
        loading={props.loading}
        emptyText={props.emptyText}
        variant={props.variant}
        size={props.size}
      >
        {props.showHeader && (
          <Table.Head>
            <Table.Row>
              {props.enableRowSelection && (
                <Table.HeaderCell>
                  <input type="checkbox" />
                </Table.HeaderCell>
              )}
              <Table.HeaderCell
                sortable={props.enableSorting}
                sortDirection={sortColumn === "id" ? sortDirection : null}
                onSort={() => handleSort("id")}
              >
                #
              </Table.HeaderCell>
              <Table.HeaderCell
                sortable={props.enableSorting}
                sortDirection={sortColumn === "name" ? sortDirection : null}
                onSort={() => handleSort("name")}
              >
                Name
              </Table.HeaderCell>
              <Table.HeaderCell
                sortable={props.enableSorting}
                sortDirection={sortColumn === "email" ? sortDirection : null}
                onSort={() => handleSort("email")}
              >
                Email
              </Table.HeaderCell>
              <Table.HeaderCell
                sortable={props.enableSorting}
                sortDirection={sortColumn === "role" ? sortDirection : null}
                onSort={() => handleSort("role")}
              >
                Role
              </Table.HeaderCell>
              <Table.HeaderCell
                sortable={props.enableSorting}
                sortDirection={sortColumn === "status" ? sortDirection : null}
                onSort={() => handleSort("status")}
              >
                Status
              </Table.HeaderCell>
              {props.showActions && (
                <Table.HeaderCell align="right">Actions</Table.HeaderCell>
              )}
            </Table.Row>
          </Table.Head>
        )}
        <Table.Body
          loading={props.loading}
          emptyText={props.emptyText}
          data={
            props.enablePagination
              ? sortedData.slice(0, props.pageSize)
              : sortedData
          }
          renderRow={(row, index) => (
            <Table.Row
              key={row.id}
              clickable={props.enableRowClick}
              selected={index === 0 && props.showRowSelection}
            >
              {props.enableRowSelection && (
                <Table.Cell>
                  <input type="checkbox" />
                </Table.Cell>
              )}
              <Table.Cell>{row.id}</Table.Cell>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.role}</Table.Cell>
              <Table.Cell>{renderStatus(row.status)}</Table.Cell>
              {props.showActions && (
                <Table.Cell align="right">{renderActions()}</Table.Cell>
              )}
            </Table.Row>
          )}
        >
          {/* Satisfying the children requirement */}
        </Table.Body>
      </Table>

      {props.enablePagination && (
        <div className="mt-4 flex justify-between items-center">
          <div>
            Showing 1-{Math.min(props.pageSize, sortedData.length)} of{" "}
            {sortedData.length} entries
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" disabled>
              Previous
            </Button>
            <Button size="sm" variant="outline">
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export const tableConfig: ComponentConfigType = {
  defaultProps: {
    striped: true,
    hover: true,
    bordered: true,
    compact: false,
    sticky: false,
    sortable: false,
    loading: false,
    showHeader: true,
    variant: "default",
    size: "md",
    emptyText: "No data available",
    enablePagination: false,
    pageSize: 5,
    enableSearch: false,
    enableRowSelection: false,
    enableColumnVisibility: false,
    enableSorting: false,
    sortDirection: null,
    sortColumn: null,
    showActions: false,
    showRowSelection: false,
    enableRowClick: false,
  },

  // Use the separate component for rendering
  renderComponent: (props, setProps) => (
    <TableDemo props={props} setProps={setProps} />
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
        <div className="flex flex-col gap-3">
          <Text size="sm" weight="bold">
            Layout
          </Text>

          <div className="flex flex-col gap-1">
            <Text size="xs" className="text-dark-300">
              Size
            </Text>
            <RadioGroup
              value={props.size}
              onChange={(value) => setProps({ ...props, size: value })}
            >
              <RadioGroup.Item value="sm" label="Small" />
              <RadioGroup.Item value="md" label="Medium" />
              <RadioGroup.Item value="lg" label="Large" />
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-1">
            <Text size="xs" className="text-dark-300">
              Variant
            </Text>
            <SelectInput
              value={props.variant}
              onChange={(value) => setProps({ ...props, variant: value })}
              classNames={selectInputClasses}
            >
              <SelectInput.Option value="default" label="Default" />
              <SelectInput.Option value="primary" label="Primary" />
              <SelectInput.Option value="secondary" label="Secondary" />
              <SelectInput.Option value="tertiary" label="Tertiary" />
            </SelectInput>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Text size="sm" weight="bold">
            Table Features
          </Text>

          <Switch
            label="Show Header"
            checked={props.showHeader}
            onChange={(checked) => setProps({ ...props, showHeader: checked })}
            classNames={switchClasses}
          />

          <Switch
            label="Show Actions"
            checked={props.showActions}
            onChange={(checked) => setProps({ ...props, showActions: checked })}
            classNames={switchClasses}
          />

          <Switch
            label="Enable Row Selection"
            checked={props.enableRowSelection}
            onChange={(checked) =>
              setProps({ ...props, enableRowSelection: checked })
            }
            classNames={switchClasses}
          />

          <Switch
            label="Show Row Selection Example"
            checked={props.showRowSelection}
            onChange={(checked) =>
              setProps({ ...props, showRowSelection: checked })
            }
            classNames={switchClasses}
          />

          <Switch
            label="Enable Row Click"
            checked={props.enableRowClick}
            onChange={(checked) =>
              setProps({ ...props, enableRowClick: checked })
            }
            classNames={switchClasses}
          />

          <Switch
            label="Enable Sorting"
            checked={props.enableSorting}
            onChange={(checked) =>
              setProps({ ...props, enableSorting: checked })
            }
            classNames={switchClasses}
          />

          <Switch
            label="Enable Pagination"
            checked={props.enablePagination}
            onChange={(checked) =>
              setProps({ ...props, enablePagination: checked })
            }
            classNames={switchClasses}
          />

          {props.enablePagination && (
            <NumberInput
              label="Page Size"
              value={props.pageSize}
              onChange={(value) => setProps({ ...props, pageSize: value })}
              min={1}
              max={20}
            />
          )}

          <Switch
            label="Enable Search"
            checked={props.enableSearch}
            onChange={(checked) =>
              setProps({ ...props, enableSearch: checked })
            }
            classNames={switchClasses}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Text size="sm" weight="bold">
            Table Style
          </Text>

          <Switch
            label="Striped"
            checked={props.striped}
            onChange={(checked) => setProps({ ...props, striped: checked })}
            classNames={switchClasses}
          />

          <Switch
            label="Hover"
            checked={props.hover}
            onChange={(checked) => setProps({ ...props, hover: checked })}
            classNames={switchClasses}
          />

          <Switch
            label="Bordered"
            checked={props.bordered}
            onChange={(checked) => setProps({ ...props, bordered: checked })}
            classNames={switchClasses}
          />

          <Switch
            label="Compact"
            checked={props.compact}
            onChange={(checked) => setProps({ ...props, compact: checked })}
            classNames={switchClasses}
          />

          <Switch
            label="Sticky Header"
            checked={props.sticky}
            onChange={(checked) => setProps({ ...props, sticky: checked })}
            classNames={switchClasses}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Text size="sm" weight="bold">
            State
          </Text>

          <Switch
            label="Loading"
            checked={props.loading}
            onChange={(checked) => setProps({ ...props, loading: checked })}
            classNames={switchClasses}
          />

          {props.loading && (
            <Alert intent="warning" closeable={false}>
              While loading is true, the table will display a loading indicator
              and hide content
            </Alert>
          )}
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
          default: true,
          description: "Adds borders around the table and cells",
        },
        compact: {
          type: "boolean",
          default: false,
          description: "Reduces the padding in cells for a more compact table",
        },
        sticky: {
          type: "boolean",
          default: false,
          description: "Makes the table header stick to the top when scrolling",
        },
        sortable: {
          type: "boolean",
          default: false,
          description: "Makes all columns sortable when clicked",
        },
        loading: {
          type: "boolean",
          default: false,
          description: "Shows a loading spinner and hides table content",
        },
        emptyText: {
          type: "string",
          default: "No data available",
          description: "Text to display when the table has no data",
        },
        variant: {
          type: "string",
          default: "default",
          description: "Visual style variant of the table",
          possibleValues: ["default", "primary", "secondary", "tertiary"],
        },
        size: {
          type: "string",
          default: "md",
          description: "Controls the size of text and spacing in the table",
          possibleValues: ["sm", "md", "lg"],
        },
      }}
    />
  ),
};
