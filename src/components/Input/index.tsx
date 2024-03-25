import { useState } from "react";

interface Props {
  type?: "text" | "password";
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  name?: string;
  size?: "small" | "medium" | "large";
}

export function Input({
  type = "text",
  label,
  placeholder,
  name,
  size = "medium",
  value,
  onChange,
  onBlur,
}: Props) {
  const [isHovered, setIsHovered] = useState("");
  const [isActived, setIsActived] = useState(false);

  const sizes = {
    small: "28px",
    medium: "35px",
    large: "45px",
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className="input"
        style={{
          width: "100%",
          padding: 10,
          outline: "none",
          border: "1px solid",
          borderRadius: 5,
          borderColor: isActived || isHovered === name ? "#e34954" : "#ccc",
          transition: "0.3s",
          height: sizes[size],
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        id={name}
        onMouseEnter={() => name && setIsHovered(name)}
        onMouseLeave={() => setIsHovered("")}
        onFocus={() => setIsActived(true)}
        onBlur={(event) => {
          setIsActived(false);
          onBlur && onBlur(event);
        }}
      />
    </div>
  );
}
