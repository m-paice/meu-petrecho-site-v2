import { useNavigate } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

export function ClientsDetails() {
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
            onClick={() => navigate("/clients/1/edit")}
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
          <h4>João</h4>
          <p>{"99999999999".replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}</p>
          <p>january</p>
        </div>
      </div>
    </div>
  );
}
