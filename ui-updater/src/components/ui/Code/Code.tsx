import { cn } from "../_utils";
import { CodeProps } from "./types";

export const Code = ({
  children,
  className,
  color,
  px = 2,
  py = 1,
  radius = "sm",
}: CodeProps) => {
  return (
    <code
      className={cn(
        px && `px-${px}`,
        py && `py-${py}`,
        `rounded-${radius}`,
        className
      )}
      style={{ backgroundColor: color }}
    >
      {children}
    </code>
  );
};

Code.displayName = "Code";
