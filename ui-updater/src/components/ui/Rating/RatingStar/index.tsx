import {
    IconStar,
    IconStarFilled,
    IconStarHalfFilled
} from "@tabler/icons-react";
import { RatingStarProps } from "../types";
import { cn } from "../..";

export const RatingStar = ({
    filled = true,
    halfFilled,
    size = "md",
    color,
    onClick
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
        "text-yellow-500",
        onClick && "cursor-pointer",
        color && `text-${color}`
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
                color={color}
                onClick={onClick}
                className={starClass}
            />
        </div>
    );
};
