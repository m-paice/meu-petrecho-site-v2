import { useNavigate } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

export function Header() {
  const navigate = useNavigate();

  return (
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
  );
}
