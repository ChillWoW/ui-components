import { cn } from "../_utils";
import { RatingStar } from "./RatingStar";
import { RatingInputProps } from "./types";

export const RatingInput = ({
  rating,
  maxRating = 5,
  onChange,
  size = "md",
  showRating,
  color,
  allowHalf,
  readOnly = false,
  orientation = "horizontal",
  spacing = "md",
  emptyColor,
  onHover = false,
  className,
  classNames,
}: RatingInputProps) => {
  const roundRating = (value: number) => {
    const multiplier = allowHalf ? 2 : 1;
    return Math.round(value * multiplier) / multiplier;
  };

  const handleClick = (index: number, fraction: number = 1) => {
    if (onChange && !readOnly) {
      const newRating = index + fraction;
      onChange(roundRating(newRating));
    }
  };

  const getFractionIcon = (index: number) => {
    const difference = rating - index;

    if (difference >= 1) return "full";
    if (difference <= 0) return "empty";

    if (allowHalf) {
      return difference >= 0.5 ? "half" : "empty";
    }

    return "empty";
  };

  const getSpacingClass = () => {
    return spacing === "xs"
      ? "gap-0.5"
      : spacing === "sm"
      ? "gap-1"
      : spacing === "md"
      ? "gap-2"
      : spacing === "lg"
      ? "gap-3"
      : "gap-4";
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center",
        getSpacingClass(),
        classNames?.container,
        className
      )}
    >
      {showRating && (
        <p className={cn("text-gray-300", classNames?.ratingText)}>
          {rating.toFixed(allowHalf ? 1 : 0)}
        </p>
      )}
      <div
        className={cn(
          "flex items-center",
          getSpacingClass(),
          orientation === "vertical" && "flex-col",
          classNames?.starsContainer
        )}
      >
        {Array.from({ length: maxRating }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "relative",
              readOnly ? "" : "cursor-pointer",
              classNames?.starWrapper
            )}
            onClick={() => handleClick(index)}
            role={readOnly ? "presentation" : "button"}
            aria-label={readOnly ? undefined : `Rate ${index + 1}`}
          >
            <RatingStar
              halfFilled={getFractionIcon(index) === "half"}
              filled={getFractionIcon(index) === "full"}
              size={size}
              color={color}
              emptyColor={emptyColor}
              className={classNames?.star}
              onHover={onHover}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
