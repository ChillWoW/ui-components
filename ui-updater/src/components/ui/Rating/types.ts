export type RatingSize = "xs" | "sm" | "md" | "lg" | "xl";
export type RatingSpacing = "xs" | "sm" | "md" | "lg" | "xl";
export type RatingOrientation = "horizontal" | "vertical";

export interface RatingInputClassNames {
  container?: string;
  starsContainer?: string;
  starWrapper?: string;
  star?: string;
  ratingText?: string;
}

export interface RatingInputProps {
  rating: number;
  maxRating?: number;
  onChange?: (rating: number) => void;
  size?: RatingSize;
  showRating?: boolean;
  color?: string;
  emptyColor?: string;
  readOnly?: boolean;
  allowHalf?: boolean;
  orientation?: RatingOrientation;
  spacing?: RatingSpacing;
  className?: string;
  classNames?: RatingInputClassNames;
}

export interface RatingStarProps {
  filled?: boolean;
  halfFilled?: boolean;
  size?: RatingSize;
  color?: string;
  emptyColor?: string;
  onClick?: () => void;
  className?: string;
}

export interface RatingProps {
  children: React.ReactNode;
  className?: string;
  orientation?: RatingOrientation;
  spacing?: RatingSpacing;
  ariaLabel?: string;
}
