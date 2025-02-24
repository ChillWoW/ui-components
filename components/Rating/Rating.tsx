import { RatingInput } from "./RatingInput";
import { RatingStar } from "./RatingStar";
import { RatingProps } from "./types";

export const Rating = ({ children }: RatingProps) => {
    return <div className="flex gap-1">{children}</div>;
};

Rating.Input = RatingInput;
Rating.Star = RatingStar;
