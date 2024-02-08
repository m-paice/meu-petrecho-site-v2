import { useState } from "react";

const items = ["Todos", "Em andamento", "Finalizados"];

export function CampaignsFilter() {
  const [selected, setSelected] = useState("Todos");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
            transition: "color 0.3s",
            border: selected === item ? "1px solid" : "none",
            color: selected === item ? "#e34954" : "",
            borderColor: selected === item ? "rgba(250, 137, 107, 0.3)" : "",

            "&:hover,&:focus": {
              color: "#FFFFFF",
              backgroundColor: "#e34954",
              boxShadow:
                "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)",
            },
          }}
          onClick={() => setSelected(item)}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
