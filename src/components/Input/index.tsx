import { useState } from "react";

interface Props {
  label: string;
  placeholder: string;
  name: string;
}

export function Input({ label, placeholder, name }: Props) {
  const [isHovered, setIsHovered] = useState("");
  const [isActived, setIsActived] = useState(false);

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
        }}
        placeholder={placeholder}
        type="text"
        id={name}
        onMouseEnter={() => setIsHovered(name)}
        onMouseLeave={() => setIsHovered("")}
        onFocus={() => setIsActived(true)}
        onBlur={() => setIsActived(false)}
      />
    </div>
  );
}
