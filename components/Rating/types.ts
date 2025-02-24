export type RatingSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface RatingInputProps {
    rating: number;
    maxRating?: number;
    onChange?: (rating: number) => void;
    size?: RatingSize;
    showRating?: boolean;
    color?: string;
    readOnly?: boolean;
    allowHalf?: boolean;
}

export interface RatingStarProps {
    filled?: boolean;
    halfFilled?: boolean;
    size?: RatingSize;
    color?: string;
    onClick?: () => void;
}

export interface RatingProps {
    children: React.ReactNode;
}
