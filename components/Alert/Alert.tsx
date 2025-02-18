import clsx from "clsx";
import "./Alert.css";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  title?: string;
  description?: string;
}

export const Alert: React.FC<AlertProps> = ({
  size = "md",
  className,
  title,
  description,
  ...props
}: AlertProps) => {
  const alertClasses = clsx("alert", size && `size-${size}`, className);

  return (
    <div className={alertClasses} {...props}>
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        {description && <div className="alert-description">{description}</div>}
      </div>
    </div>
  );
};
