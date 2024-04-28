import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { useRequestDestroy } from "../../hooks/useRequestDestroy";

export function DeleteModal() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { execute } = useRequestDestroy({
    path: `/users/${id}`,
    callbackSuccess: () => {
      navigate("/clients");
    },
  });

  return (
    <Modal
      title="Remover cliente"
      isOpen={window.location.pathname.includes(`/clients/${id}/delete`)}
      closeModal={() => {
        navigate(`/clients/${id}`);
      }}
      size="small"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <p style={{ textAlign: "center", fontSize: 18 }}>
            Tem certeza que deseja remover <br /> esse cliente?
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 50,
          }}
        >
          <Button
            size="small"
            variant="outiline"
            onClick={() => navigate(`/clients/${id}`)}
          >
            Cancelar
          </Button>
          <Button size="small" onClick={execute}>
            Remover
          </Button>
        </div>
      </div>
    </Modal>
  );
}
