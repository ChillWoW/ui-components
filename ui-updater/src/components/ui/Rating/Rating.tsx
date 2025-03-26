import { RatingInput } from "./RatingInput";
import { RatingStar } from "./RatingStar";
import { RatingProps } from "./types";
import { cn } from "../_utils";

export const Rating = ({
  children,
  className,
  orientation = "horizontal",
  spacing = "md",
  ariaLabel = "Rating",
}: RatingProps) => {
  const getSpacingClass = () => {
    const gap =
      spacing === "xs"
        ? "gap-0.5"
        : spacing === "sm"
        ? "gap-1"
        : spacing === "md"
        ? "gap-2"
        : spacing === "lg"
        ? "gap-3"
        : "gap-4";

    return gap;
  };

  return (
    <div
      className={cn(
        "flex",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        getSpacingClass(),
        className
      )}
      role="group"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

Rating.Input = RatingInput;
Rating.Star = RatingStar;

Rating.displayName = "Rating";
