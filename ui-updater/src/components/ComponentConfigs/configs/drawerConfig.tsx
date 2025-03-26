import React, { useState, useEffect } from "react";
import {
  Text,
  Switch,
  Drawer,
  RadioGroup,
  Button,
  Slider,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import { switchClasses, sliderClass } from "./index";

export const drawerConfig: ComponentConfigType = {
  defaultProps: {
    open: false,
    position: "left",
    width: 320,
    disableScroll: true,
    closeOnOverlayClick: true,
    animationDuration: 0.3,
    overlayAnimationDuration: 0.1,
    separator: true,
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

          <Drawer
            open={isOpen}
            onClose={handleClose}
            position={props.position}
            width={props.width}
            disableScroll={props.disableScroll}
            closeOnOverlayClick={props.closeOnOverlayClick}
            animationDuration={props.animationDuration}
            overlayAnimationDuration={props.overlayAnimationDuration}
          >
            <Drawer.Header separator={props.separator}>
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

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Width
          </Text>
          <Slider
            value={props.width}
            min={100}
            max={1200}
            step={10}
            onChange={(value) => setProps({ ...props, width: value })}
            classNames={sliderClass}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" weight="bold">
            Options
          </Text>
          <Switch
            label="Disable Scroll"
            checked={props.disableScroll}
            onChange={(value) => setProps({ ...props, disableScroll: value })}
            classNames={switchClasses}
          />
          <Switch
            label="Close on Overlay Click"
            checked={props.closeOnOverlayClick}
            onChange={(value) =>
              setProps({ ...props, closeOnOverlayClick: value })
            }
            classNames={switchClasses}
          />
          <Switch
            label="Header Separator"
            checked={props.separator}
            onChange={(value) => setProps({ ...props, separator: value })}
            classNames={switchClasses}
          />
        </div>
      </div>
    );
  },

  infoPanel: () => (
    <InfoPanel
      propInfo={{
        children: {
          type: "ReactNode",
          required: true,
          description: "Content of the drawer",
        },
        open: {
          type: "boolean",
          description: "Determines if the drawer is open",
        },
        onClose: {
          type: "function",
          description: "Determines the function when the drawer is closed",
        },
        position: {
          type: "string",
          description: "Determines the position of the drawer",
          possibleValues: ["left", "right"],
        },
        width: {
          type: "string | number",
          default: 320,
          description: "Determines the width of the drawer",
        },
        disableScroll: {
          type: "boolean",
          default: true,
          description: "Determines if the drawer should disable scroll",
        },
        closeOnOverlayClick: {
          type: "boolean",
          default: true,
          description: "Determines if the drawer should close on overlay click",
        },
        animationDuration: {
          type: "number",
          default: 0.3,
          description: "Determines the animation duration of the drawer",
        },
        overlayAnimationDuration: {
          type: "number",
          default: 0.1,
          description:
            "Determines the animation duration of the drawer overlay",
        },
        className: {
          type: "string",
          description: "Determines the class name of the drawer",
        },
        classNames: {
          type: "object",
          description: "Determines the class name of the drawer",
          properties: {
            container: {
              type: "string",
              description: "Determines the class name of the drawer container",
            },
            overlay: {
              type: "string",
              description: "Determines the class name of the drawer overlay",
            },
            content: {
              type: "string",
              description: "Determines the class name of the drawer content",
            },
            header: {
              type: "string",
              description: "Determines the class name of the drawer header",
            },
          },
        },
      }}
    />
  ),
};
