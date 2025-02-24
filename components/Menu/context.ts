import { createContext, useContext } from "react";

interface MenuContextValue {
    opened: boolean;
    setOpened: (opened: boolean) => void;
    targetRef: React.RefObject<HTMLDivElement>;
    position: "top" | "bottom" | "left" | "right";
    offset: number;
    trigger: "click" | "hover";
    classNames?: {
        root?: string;
        target?: string;
        dropdown?: string;
        item?: string;
        label?: string;
        divider?: string;
    };
}

export const MenuContext = createContext<MenuContextValue>({
    opened: false,
    setOpened: () => {},
    //@ts-ignore
    targetRef: { current: null },
    position: "bottom",
    offset: 4,
    trigger: "click",
    classNames: {}
});

export const useMenuContext = () => useContext(MenuContext);
