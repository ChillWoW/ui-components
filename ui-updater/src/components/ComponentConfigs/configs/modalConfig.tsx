import React, { useState, useEffect } from "react";
import {
    Text,
    Modal,
    Button,
    Switch,
    RadioGroup,
    SelectInput,
    NumberInput
} from "@/components/ui";
import { ComponentConfigType } from "../index";
import { InfoPanel } from "../InfoPanel";
import {
    switchClasses,
    selectInputClasses,
    buttonClass,
    activeButtonClass
} from "./index";

export const modalConfig: ComponentConfigType = {
    defaultProps: {
        opened: false,
        size: "md",
        centered: true,
        overlayOpacity: 0.6,
        canClose: true,
        closeOnClickOutside: true,
        closeOnEscape: true
    },

    renderComponent: (props, setProps) => {
        const ModalWrapper = () => {
            const [isOpen, setIsOpen] = useState(props.opened);

            const handleOpen = () => setIsOpen(true);
            const handleClose = () => setIsOpen(false);

            useEffect(() => {
                if (setProps && isOpen !== props.opened) {
                    setProps({ ...props, opened: isOpen });
                }
            }, [isOpen, props, setProps]);

            useEffect(() => {
                if (isOpen !== props.opened) {
                    setIsOpen(props.opened);
                }
            }, [props.opened, isOpen]);

            return (
                <div className="w-full flex flex-col items-center justify-center h-full">
                    <Button onClick={handleOpen} variant="filled" size="md">
                        Open Modal
                    </Button>

                    <Modal
                        opened={isOpen}
                        onClose={handleClose}
                        size={props.size}
                        centered={props.centered}
                        overlayOpacity={props.overlayOpacity}
                        canClose={props.canClose}
                        closeOnClickOutside={props.closeOnClickOutside}
                        closeOnEscape={props.closeOnEscape}
                    >
                        <Modal.Header
                            onClose={props.canClose ? handleClose : undefined}
                        >
                            <Text size="lg" weight="bold">
                                Modal Title
                            </Text>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="py-4">
                                <Text>
                                    This is a modal dialog. You can customize
                                    its size, position, and behavior.
                                </Text>
                                <Text className="mt-2">
                                    Try changing the properties in the panel on
                                    the right to see how they affect this modal.
                                </Text>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button onClick={handleClose}>Confirm</Button>
                            </div>
                        </Modal.Footer>
                    </Modal>
                </div>
            );
        };

        return <ModalWrapper />;
    },

    generateCode: (props) => {
        return `        <Modal
          opened={${props.opened}}
          onClose={${props.onClose}}
          size={${props.size}}
          centered={${props.centered}}
          overlayOpacity={${props.overlayOpacity}}
          canClose={${props.canClose}}
          closeOnClickOutside={${props.closeOnClickOutside}}
          closeOnEscape={${props.closeOnEscape}}
        >
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            <div className="py-4">
              <Text>This is a modal dialog. You can customize its size, position, and behavior.</Text>
              <Text className="mt-2">Try changing the properties in the panel on the right to see how they affect this modal.</Text>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={${props.onClose}}>Cancel</Button>
              <Button onClick={${props.onClose}}>Confirm</Button>
            </div>
          </Modal.Footer>
        </Modal>`;
    },

    renderPropsPanel: () => {
        return ({
            props,
            setProps
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
                    Modal Properties
                </Text>

                <div className="flex flex-col gap-1">
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
                            { value: "full", label: "full" }
                        ]}
                        value={props.size}
                        onChange={(value) =>
                            setProps({ ...props, size: value })
                        }
                        classNames={selectInputClasses}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Text size="sm" weight="bold">
                        Options
                    </Text>
                    <Switch
                        label="Centered"
                        checked={props.centered}
                        onChange={(checked) =>
                            setProps({ ...props, centered: checked })
                        }
                        classNames={switchClasses}
                    />
                    <Switch
                        label="Can Close"
                        checked={props.canClose}
                        onChange={(checked) =>
                            setProps({ ...props, canClose: checked })
                        }
                        classNames={switchClasses}
                    />
                    <Switch
                        label="Close On Click Outside"
                        checked={props.closeOnClickOutside}
                        onChange={(checked) =>
                            setProps({ ...props, closeOnClickOutside: checked })
                        }
                        classNames={switchClasses}
                    />
                    <Switch
                        label="Close On Escape"
                        checked={props.closeOnEscape}
                        onChange={(checked) =>
                            setProps({ ...props, closeOnEscape: checked })
                        }
                        classNames={switchClasses}
                    />
                </div>
            </div>
        );
    },

    infoPanel: () => (
        <InfoPanel
            propInfo={{
                opened: {
                    type: "boolean",
                    required: true,
                    description: "Controls whether the modal is visible"
                },
                onClose: {
                    type: "function",
                    required: true,
                    description: "Function called when the modal should close"
                },
                size: {
                    type: "string",
                    default: "md",
                    description: "Controls the width of the modal",
                    possibleValues: ["xs", "sm", "md", "lg", "xl", "full"]
                },
                centered: {
                    type: "boolean",
                    default: true,
                    description: "Centers the modal vertically and horizontally"
                },
                children: {
                    type: "ReactNode",
                    required: true,
                    description:
                        "Content of the modal. Can include Modal.Header, Modal.Body, and Modal.Footer components."
                },
                overlayOpacity: {
                    type: "number",
                    default: 0.6,
                    description: "Opacity of the backdrop overlay (0-1)"
                },
                canClose: {
                    type: "boolean",
                    default: true,
                    description:
                        "Whether the modal can be closed by clicking outside or pressing Escape"
                },
                closeOnClickOutside: {
                    type: "boolean",
                    default: true,
                    description:
                        "Whether the modal can be closed by clicking outside"
                },
                closeOnEscape: {
                    type: "boolean",
                    default: true,
                    description:
                        "Whether the modal can be closed by pressing Escape"
                },
                zIndex: {
                    type: "number",
                    default: 200,
                    description: "The z-index of the modal"
                },
                animationDuration: {
                    type: "number",
                    default: 0.3,
                    description: "The duration of the modal animation"
                },
                overlayAnimationDuration: {
                    type: "number",
                    default: 0.1,
                    description: "The duration of the modal overlay animation"
                },
                className: {
                    type: "string",
                    description:
                        "Additional CSS classes to apply to the modal content container"
                },
                classNames: {
                    type: "object",
                    description:
                        "Additional CSS classes to apply to modal subcomponents",
                    properties: {
                        overlay: {
                            type: "string",
                            description: "CSS class for the background overlay"
                        },
                        container: {
                            type: "string",
                            description:
                                "CSS class for the outer modal container"
                        },
                        content: {
                            type: "string",
                            description:
                                "CSS class for the modal content wrapper"
                        },
                        header: {
                            type: "string",
                            description: "CSS class for the modal header"
                        },
                        body: {
                            type: "string",
                            description: "CSS class for the modal body"
                        },
                        footer: {
                            type: "string",
                            description: "CSS class for the modal footer"
                        },
                        closeButton: {
                            type: "string",
                            description: "CSS class for the close button"
                        }
                    }
                }
            }}
        />
    )
};
