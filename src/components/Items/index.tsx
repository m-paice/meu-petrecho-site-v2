import { CSSProperties } from "react";
import "./style.css";

import { colors } from "../../theme";
import { Item } from "../Item";

const status: { [key: number]: { color: string; text: string } } = {
  1: { color: "green", text: "finalizado" },
  2: { color: "orange", text: "pendente" },
  3: { color: "red", text: "cancelado" },
};

export function Items() {
  return (
    <div>
      <div>
        <span style={styles.title}>8 Items</span>
      </div>
      <div style={styles.container}>
        {Array.from({ length: 8 }).map((_, i) => {
          const { color, text } = status[Math.floor(Math.random() * 3) + 1];

          return <Item key={i} text={text} color={color} />;
        })}
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    overflowY: "auto",
    height: "300px",
  },
  title: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 24,
  },
};
