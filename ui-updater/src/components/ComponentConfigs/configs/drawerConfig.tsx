import React, { useState, useEffect } from "react";
import { Text, Switch, Drawer, RadioGroup, Button } from "@/components/ui";
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

export const drawerConfig: ComponentConfigType = {
  defaultProps: {
    open: false,
    position: "left",
  },

  renderComponent: (props, setProps) => {
    const DrawerWrapper = () => {
      const [isOpen, setIsOpen] = useState(props.open);

      const handleOpen = () => setIsOpen(true);
      const handleClose = () => setIsOpen(false);

      useEffect(() => {
        if (setProps && isOpen !== props.open) {
          setProps({ ...props, open: isOpen });
        }
      }, [isOpen, props, setProps]);

      useEffect(() => {
        if (isOpen !== props.open) {
          setIsOpen(props.open);
        }
      }, [props.open, isOpen]);

      return (
        <div className="w-full flex flex-col items-center">
          <Button onClick={handleOpen} variant="filled" size="md">
            Open Drawer
          </Button>

          <Drawer open={isOpen} onClose={handleClose} position={props.position}>
            <Drawer.Header onClose={handleClose}>
              <Text>Header</Text>
            </Drawer.Header>
            <Drawer.Content>
              <Text>Content</Text>
            </Drawer.Content>
          </Drawer>
        </div>
      );
    };

    return <DrawerWrapper />;
  },

  generateCode: (props) => (
    <Drawer open={props.open} onClose={() => {}} position={props.position}>
      <Drawer.Header>
        <Text>Header</Text>
      </Drawer.Header>
      <Drawer.Content>
        <Text>Content</Text>
      </Drawer.Content>
    </Drawer>
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
          Drawer Properties
        </Text>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Position
          </Text>
          <RadioGroup
            value={props.position}
            onChange={(value) => setProps({ ...props, position: value })}
          >
            <RadioGroup.Item value="left" label="Left" />
            <RadioGroup.Item value="right" label="Right" />
          </RadioGroup>
        </div>
      </div>
    );
  },
};
