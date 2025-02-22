import { cn } from "..";

export interface KbdProps {
    children: React.ReactNode;
}

export const Kbd = ({ children }: KbdProps) => {
    return (
        <kbd
            className={cn(
                "px-2 py-1.5 text-sm h-fit w-fit rounded-md",
                "bg-[#252627] border border-[#3e4249] text-white hover:bg-[#333538]"
            )}
        >
            {children}
        </kbd>
    );
};
