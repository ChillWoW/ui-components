import {
    IconStar,
    IconStarFilled,
    IconStarHalfFilled
} from "@tabler/icons-react";
import { cn, Text } from "..";

export type RatingSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface RatingProps {
    rating: number;
    maxRating?: number;
    onChange?: (rating: number) => void;
    size?: RatingSize;
    showRating?: boolean;
    color?: string;
    readOnly?: boolean;
    allowHalf?: boolean;
}

export const Rating = ({
    rating,
    maxRating = 5,
    onChange,
    size = "md",
    showRating,
    color,
    readOnly,
    allowHalf
}: RatingProps) => {
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

    const roundRating = (value: number) => {
        const multiplier = allowHalf ? 2 : 1;
        return Math.round(value * multiplier) / multiplier;
    };

    const handleClick = (index: number, fraction: number = 1) => {
        if (!readOnly && onChange) {
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

    return (
        <div className="flex flex-col items-center gap-1">
            {showRating && (
                <Text className={`text-gray-300 text-md`}>
                    {rating.toFixed(allowHalf ? 1 : 0)}
                </Text>
            )}
            <div className="flex items-center gap-1">
                {Array.from({ length: maxRating }).map((_, index) => (
                    <div
                        key={index}
                        className="relative"
                        onClick={() => handleClick(index)}
                    >
                        {getFractionIcon(index) === "full" ? (
                            <IconStarFilled
                                className={cn(
                                    !readOnly && "cursor-pointer",
                                    "text-yellow-500",
                                    color && `text-${color}`
                                )}
                                size={iconSize}
                            />
                        ) : getFractionIcon(index) === "half" ? (
                            <IconStarHalfFilled
                                className={cn(
                                    !readOnly && "cursor-pointer",
                                    "text-yellow-500",
                                    color && `text-${color}`
                                )}
                                size={iconSize}
                            />
                        ) : (
                            <IconStar
                                className={cn(
                                    !readOnly && "cursor-pointer",
                                    "text-gray-300",
                                    color && `text-${color}`
                                )}
                                size={iconSize}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
