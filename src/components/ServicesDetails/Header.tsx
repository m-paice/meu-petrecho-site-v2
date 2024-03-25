import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useNavigate, useParams } from "react-router-dom";

export function Header() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
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
          onClick={() => navigate(`/services/${id}/edit`)}
        />
        <TrashIcon
          width={20}
          color="gray"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/services/${id}/delete`)}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
};
