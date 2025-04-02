import { CenterProps } from "./types";

export const Center = ({ children }: CenterProps) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      {children}
    </div>
  );
};

Center.displayName = "Center";
