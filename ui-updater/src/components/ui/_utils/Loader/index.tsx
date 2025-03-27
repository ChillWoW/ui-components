import { cn } from "../..";

export interface LoaderProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const Loader = ({ width = 4, height = 4, className }: LoaderProps) => {
  return (
    <span
      className={cn(
        `mr-2 inline-block w-${width} h-${height} border-2 border-current border-t-transparent rounded-full animate-spin`,
        className
      )}
      role="status"
      aria-label="loading"
    />
  );
};

Loader.displayName = "Loader";
