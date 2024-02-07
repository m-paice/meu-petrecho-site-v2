import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
          onClick={() => navigate("/campaigns/1/edit")}
        />
        <TrashIcon width={20} color="gray" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}
