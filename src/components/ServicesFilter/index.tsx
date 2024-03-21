import { useState } from "react";

const items = ["Todos", "Recentes", "Favoritos", "Arquivados"];

export function ServicesFilter() {
  const [selected, setSelected] = useState("Todos");
  const [isHovered, setIsHovered] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 20,
        gap: 15,
      }}
    >
      {items.map((item) => (
        <p
          key={item}
          style={{
            cursor: "pointer",
            borderRadius: 5,
            padding: 3,
            transition: "color 0.3s, background-color 0.3s ease",
            border: selected === item ? "1px solid" : "none",
            color: isHovered === item || selected === item ? "#e34954" : "",
            borderColor: selected === item ? "rgba(250, 137, 107, 0.3)" : "",
            backgroundColor:
              isHovered === item ? "rgba(250, 137, 107, 0.1)" : "",
          }}
          onClick={() => setSelected(item)}
          onMouseEnter={() => setIsHovered(item)}
          onMouseLeave={() => setIsHovered("")}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
