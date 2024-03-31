import { useState } from "react";
import { colors } from "../../theme";

interface Props {
  children: React.ReactNode;
  variant?: "outiline" | "filled";
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const sizes = {
  small: "14px",
  medium: "16px",
  large: "20px",
};

export function Button({
  children,
  variant = "filled",
  onClick,
  size = "medium",
  type,
  disabled,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        transition: "0.3s",
        backgroundColor: isHovered
          ? "rgba(250, 137, 107, 0.3)"
          : variant === "filled"
          ? colors.primary
          : "transparent",
        border: variant === "filled" ? "none" : `1px solid ${colors.primary}`,
        color: isHovered
          ? "#e34954"
          : variant === "filled"
          ? colors.white
          : colors.primary,
        borderRadius: "7px",
        cursor: "pointer",
        width: "100%",
        minWidth: "100px",
        fontSize: sizes[size] || sizes.medium,
        fontWeight: "bold",
        outline: "none",
        filter: disabled ? "grayscale(1)" : "none",
      }}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type={type}
    >
      {children}
    </button>
  );
}
