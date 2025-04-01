import React from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  Drawer,
  Switch,
  Text,
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { createTypeOptions, StylesAPI } from "@/components/StylesAPI";
import { activeButtonClass, buttonClass, switchClasses } from ".";

import ConfigCard from "@/components/ConfigCard";
import ConfigLabel from "@/components/ConfigLabel";
import PlaygroundPreview from "@/components/Playground";
import ComponentInfo from "@/components/ComponentInfo";

export const drawerConfig: ComponentConfigType = {
  renderComponent: () => (
    <div className="space-y-12">
      <div>
        <ComponentInfo
          title="Drawer"
          description="Drawer of content that can be opened and closed using a controlled state."
        />

        <div className="space-y-8">
          <ConfigLabel label="Types" />
          <ConfigCard
            title="Position"
            description="The drawer can be positioned in different directions."
            anchorId="position"
            className="flex gap-2 items-center"
          >
            {["left", "right"].map((position) => (
              <Badge key={position} intent="primary">
                {position}
              </Badge>
            ))}
          </ConfigCard>

          <ConfigCard
            title="Can Close"
            description="The drawer can be set to not close or close."
            anchorId="can-close"
            className="flex gap-1 items-center"
          >
            <Badge intent="primary">Yes</Badge>
            <Badge intent="secondary">No</Badge>
          </ConfigCard>

          <ConfigCard
            title="Width"
            description="The drawer can be set to a specific width."
          >
            <Text>Any width should work. Example: width: 320</Text>
          </ConfigCard>

          <ConfigCard
            title="Disable Scroll"
            description="The drawer can be set to disable scrolling when the component is open. (Default: true)"
            anchorId="disable-scroll"
            className="flex gap-1 items-center"
          >
            <Badge intent="primary">True</Badge>
            <Badge intent="secondary">False</Badge>
          </ConfigCard>

          <ConfigCard
            title="Close On Overlay Click"
            description="The drawer can be set to close when the overlay is clicked. (Default: true)"
            anchorId="close-on-overlay-click"
            className="flex gap-1 items-center"
          >
            <Badge intent="primary">True</Badge>
            <Badge intent="secondary">False</Badge>
          </ConfigCard>
        </div>
      </div>
    </div>
  ),

  defaultProps: {
    open: false,
    position: "left",
    canClose: true,
    width: 320,
    disableScroll: true,
    closeOnOverlayClick: true,
  },

  renderPlayground: () => {
    return ({
      props,
      setProps,
    }: {
      props: any;
      setProps: (newProps: any) => void;
    }) => (
      <PlaygroundPreview
        preview={
          <>
            <Button onClick={() => setProps({ ...props, open: true })}>
              Click to open drawer
            </Button>

            <Drawer
              open={props.open}
              onClose={() => setProps({ ...props, open: false })}
              position={props.position}
              canClose={props.canClose}
              width={props.width}
              disableScroll={props.disableScroll}
              closeOnOverlayClick={props.closeOnOverlayClick}
            >
              <Drawer.Header>Drawer</Drawer.Header>
              <Drawer.Content>
                <Text>Drawer Content</Text>
              </Drawer.Content>
            </Drawer>
          </>
        }
        exampleCode={`<Drawer
  open={open}
  onClose={() => setOpen(false)}
>
  <Drawer.Header>Drawer</Drawer.Header>
  <Drawer.Content>
    <Text>Drawer Content</Text>
  </Drawer.Content>
</Drawer>
`}
        controls={
          <>
            <PlaygroundPreview.Section title="Appearance">
              <ButtonGroup>
                <Button
                  onClick={() => setProps({ ...props, position: "left" })}
                  className={`${buttonClass} ${
                    props.position === "left" && activeButtonClass
                  }`}
                >
                  Left
                </Button>
                <Button
                  onClick={() => setProps({ ...props, position: "right" })}
                  className={`${buttonClass} ${
                    props.position === "right" && activeButtonClass
                  }`}
                >
                  Right
                </Button>
              </ButtonGroup>
            </PlaygroundPreview.Section>

            <PlaygroundPreview.Section title="States">
              <Switch
                label="Close On Overlay Click"
                checked={props.closeOnOverlayClick}
                onChange={(checked) =>
                  setProps({ ...props, closeOnOverlayClick: checked })
                }
                classNames={switchClasses}
              />
              <Switch
                label="Can Close"
                hint="Disabled, because you can't close the drawer in the playground"
                checked={props.canClose}
                onChange={(checked) =>
                  setProps({ ...props, canClose: checked })
                }
                classNames={switchClasses}
                disabled
              />
            </PlaygroundPreview.Section>
          </>
        }
      />
    );
  },

  renderStylesAPI: () => (
    <>
      <StylesAPI
        title="API"
        apiData={[
          {
            property: "children",
            description: "The header and content of the drawer",
            type: "ReactNode",
          },
          {
            property: "open",
            description: "Whether the drawer is open",
            type: "boolean",
            default: "false",
          },
          {
            property: "onClose",
            description: "The function to close the drawer",
            type: "function",
          },
          {
            property: "position",
            description: "The position of the drawer",
            type: createTypeOptions(["left", "right"]),
            default: "left",
          },
          {
            property: "canClose",
            description: "Whether the drawer can be closed",
            type: "boolean",
            default: "true",
          },
          {
            property: "width",
            description: "The width of the drawer",
            type: "number",
            default: "320",
          },
          {
            property: "disableScroll",
            description: "Whether the drawer can be scrolled",
            type: "boolean",
            default: "true",
          },
          {
            property: "closeOnOverlayClick",
            description: "Whether the drawer can be closed on overlay click",
            type: "boolean",
            default: "true",
          },
        ]}
      />
      <StylesAPI
        title="Styles API"
        apiData={[
          {
            property: "classNames",
            description: "Object of class names to override component styles",
            type: "object",
            default: "{}",
          },
          {
            property: "classNames.container",
            description: "Root drawer element",
            type: "string",
            default: "-",
          },
          {
            property: "classNames.overlay",
            description: "Drawer overlay element",
            type: "string",
            default: "-",
          },
          {
            property: "classNames.content",
            description: "Drawer content element",
            type: "string",
            default: "-",
          },
          {
            property: "classNames.header",
            description: "Drawer header element",
            type: "string",
            default: "-",
          },
          {
            property: "classNames.closeButton",
            description: "Drawer close button element",
            type: "string",
            default: "-",
          },
        ]}
      />
    </>
  ),
};
