import { useState } from "react";
import { colors } from "../../theme";

interface Props {
  title: string;
  type?: "outiline" | "filled";
  onClick?: () => void;
  size?: "small" | "medium" | "large";
}

const sizes = {
  small: "14px",
  medium: "16px",
  large: "20px",
};

export function Button({
  title,
  type = "filled",
  onClick,
  size = "medium",
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
          : type === "filled"
          ? colors.primary
          : "transparent",
        border: type === "filled" ? "none" : `2px solid ${colors.primary}`,
        color: isHovered
          ? "#e34954"
          : type === "filled"
          ? colors.white
          : colors.primary,
        borderRadius: "7px",
        cursor: "pointer",
        width: "100%",
        fontSize: sizes[size] || sizes.medium,
        fontWeight: "bold",
        outline: "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
    </button>
  );
}
