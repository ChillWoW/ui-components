import React from "react";
import {
  Button,
  ButtonSize,
  ButtonVariant,
} from "@/components/ui/Buttons/Button";
import {
  Text,
  SelectInput,
  RadioGroup,
  Switch,
  Badge,
  ButtonGroup,
} from "@/components/ui";
import { IconUser, IconUserCheck } from "@tabler/icons-react";
import { ComponentConfigType } from "../index";

const switchClasses = {
  track: "bg-dark-700",
  activeTrack: "bg-dark-100",
};

const selectInputClasses = {
  input: "bg-dark-800",
  dropdown: "bg-dark-800",
  option: "bg-dark-800 hover:bg-dark-700 text-white",
  selectedOption: "bg-dark-700",
};

export const badgeConfig: ComponentConfigType = {
  defaultProps: {
    size: "md",
    variant: "filled",
    shape: "rounded",
    leftSection: false,
    rightSection: false,
    asLink: false,
  },

  renderComponent: (props) => (
    <Badge
      size={props.size}
      variant={props.variant}
      shape={props.shape}
      leftSection={props.leftSection && <IconUser size={16} />}
      rightSection={props.rightSection && <IconUserCheck size={16} />}
      asLink={props.asLink}
      href={props.asLink && "https://chillwow.org"}
      target={props.asLink && "_blank"}
    >
      Sample Badge
    </Badge>
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
          Badge Properties
        </Text>

        <div>
          <Text size="sm" weight="bold">
            Size
          </Text>
          <SelectInput
            options={[
              { value: "xs", label: "xs" },
              { value: "sm", label: "sm" },
              { value: "md", label: "md" },
              { value: "lg", label: "lg" },
              { value: "xl", label: "xl" },
            ]}
            value={props.size}
            onChange={(value) => setProps({ ...props, size: value })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Variant
          </Text>
          <RadioGroup
            value={props.variant}
            onChange={(value) => setProps({ ...props, variant: value })}
          >
            <RadioGroup.Item value="filled" label="Filled" />
            <RadioGroup.Item value="outline" label="Outline" />
            <RadioGroup.Item value="dot" label="Dot" />
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Shape
          </Text>
          <ButtonGroup
            children={[
              <Button onClick={() => setProps({ ...props, shape: "rounded" })}>
                Rounded
              </Button>,
              <Button onClick={() => setProps({ ...props, shape: "pill" })}>
                Pill
              </Button>,
            ]}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Text size="sm" weight="bold">
            Other
          </Text>
          <Switch
            label="Link"
            checked={props.asLink}
            onChange={(checked) => setProps({ ...props, asLink: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Left Section"
            checked={props.leftSection}
            onChange={(checked) => setProps({ ...props, leftSection: checked })}
            classNames={switchClasses}
          />
          <Switch
            label="Right Section"
            checked={props.rightSection}
            onChange={(checked) =>
              setProps({ ...props, rightSection: checked })
            }
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },
};
