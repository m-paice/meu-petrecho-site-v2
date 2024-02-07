import { useNavigate } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

export function ServicesDetails() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        borderLeft: "1px solid #e6e6e6",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <h4>Detalhes</h4>
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <PencilIcon
            width={20}
            color="gray"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/services/1/edit")}
          />
          <TrashIcon width={20} color="gray" style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div
        style={{
          padding: "10px",
          display: "flex",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#e6e6e6",
            borderRadius: 80,
          }}
        />
        <div>
          <h4>Corte</h4>
          <p>R$ 30 - 30 minutos</p>
        </div>
      </div>
    </div>
  );
}
