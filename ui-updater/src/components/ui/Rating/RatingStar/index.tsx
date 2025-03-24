import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import { RatingStarProps } from "../types";
import { cn } from "../..";

export const RatingStar = ({
  filled = true,
  halfFilled,
  size = "md",
  color,
  emptyColor,
  onClick,
  className,
}: RatingStarProps) => {
  const iconSize =
    size === "xs"
      ? 12
      : size === "sm"
        ? 16
        : size === "md"
          ? 24
          : size === "lg"
            ? 32
            : 40;

  const starClass = cn(
    filled || halfFilled ? "text-yellow-400" : "text-gray-300",
    onClick && "cursor-pointer",
    className
  );

  const Icon = halfFilled
    ? IconStarHalfFilled
    : filled
      ? IconStarFilled
      : IconStar;

  return (
    <div>
      <Icon
        size={iconSize}
        stroke={1.5}
        onClick={onClick}
        className={starClass}
        aria-hidden="true"
        style={{
          color: filled ? color : emptyColor,
        }}
      />
    </div>
  );
};
