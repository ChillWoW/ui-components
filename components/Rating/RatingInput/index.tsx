import { cn, Text } from "../..";
import { RatingStar } from "../RatingStar";
import { RatingInputProps } from "../types";

export const RatingInput = ({
    rating,
    maxRating = 5,
    onChange,
    size = "md",
    showRating,
    color,
    allowHalf
}: RatingInputProps) => {
    const roundRating = (value: number) => {
        const multiplier = allowHalf ? 2 : 1;
        return Math.round(value * multiplier) / multiplier;
    };

    const handleClick = (index: number, fraction: number = 1) => {
        if (onChange) {
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
                        <RatingStar
                            halfFilled={getFractionIcon(index) === "half"}
                            filled={getFractionIcon(index) === "full"}
                            size={size}
                            color={color}
                            onClick={() => handleClick(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
