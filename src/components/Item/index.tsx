import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
  color: string;
  scheduleAt: string;
  services: string;
  user: string;
  id: string;
}

export function Item({ text, color, scheduleAt, services, user, id }: Props) {
  const [isHovered, setIsHovered] = useState("");
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",

        color: isHovered ? "#e34954" : "#000",
        transition: "0.3s",
      }}
      onMouseEnter={() => setIsHovered("true")}
      onMouseLeave={() => setIsHovered("")}
      onClick={() => navigate(`/schedules/${id}`)}
    >
      <div className="item" style={styles.item}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <b style={{ fontSize: 18 }}>{scheduleAt}</b>
          <span
            style={{
              backgroundColor: color,
              ...styles.status,
            }}
          >
            {text}
          </span>
        </div>
        <p style={{ fontSize: 16 }}>{user}</p>
        <p style={{ fontSize: 16 }}>{services}</p>
      </div>
    </div>
  );
}

const styles: {
  [key: string]: React.CSSProperties;
} = {
  item: {
    width: "100%",
    marginBottom: "10px",
    borderBottom: "1px solid #000",
    cursor: "pointer",
    marginRight: 10,
    fontSize: 18,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  status: {
    color: "#fff",
    padding: "3px",
    borderRadius: "3px",
    marginRight: 5,
  },
  containerOptions: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "0px 0px 5px #e6e6e6",
    width: 150,
    position: "absolute",
    right: 5,
    top: 30,
    zIndex: 1,
  },

  confirmed: {
    backgroundColor: "rgba(19, 222, 185, 0.3)",
    color: "#13deb9",
  },
  canceled: {
    backgroundColor: "rgba(250, 137, 107, 0.3)",
    color: "#fa896b",
  },
  restored: {
    backgroundColor: "rgba(0, 123, 255, 0.3)",
    color: "#007bff",
  },
  default: {
    backgroundColor: "rgba(237, 59, 71, 0.3)",
    color: "#e34954",
  },

  button: {
    padding: "5px 10px",
    color: "#000",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    borderRadius: 3,
    fontSize: 14,
    textAlign: "left",
    transition: "0.3s",
  },
};
