import { CSSProperties } from "react";

import { colors } from "../../theme";
import { Item } from "../Item";

interface Props {
  schedules: {
    id: string;
    status: "finished" | "canceled" | "pending";
    scheduleAt: string;
    services: string;
    user: string;
  }[];
}

const status: { [key: string]: { color: string; text: string } } = {
  finished: { color: "#13deb9", text: "finalizado" },
  pending: { color: "#ffae1f", text: "pendente" },
  canceled: { color: "#fa896b", text: "cancelado" },
};

export function Items({ schedules }: Props) {
  return (
    <div>
      <div>
        <span style={styles.title}>
          {schedules.length} {schedules.length > 1 ? "items" : "item"}
        </span>
      </div>
      <div style={styles.container}>
        {schedules.map((item) => {
          const { color, text } = status[item.status] || {
            color: "",
            text: "",
          };

          return <Item key={item.id} text={text} color={color} {...item} />;
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
