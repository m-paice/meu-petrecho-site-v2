import { useNavigate, useParams } from "react-router-dom";

import { useRequestDestroy } from "../../hooks/useRequestDestroy";
import { Button } from "../Button";
import { Modal } from "../Modal";

interface Props {
  open: boolean;
  handleClose(): void;
}

export function DeleteModal({ open, handleClose }: Props) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { execute } = useRequestDestroy({
    path: `/services/${id}`,
    callbackSuccess() {
      navigate("/services");
    },
  });

  const handleSubmit = () => {
    execute();
  };

  return (
    <Modal
      title="Remover serviço"
      isOpen={open}
      closeModal={handleClose}
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
            Tem certeza que deseja remover <br /> esse serviço?
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
          <Button size="small" variant="outiline" onClick={handleClose}>
            {"cancelar".toUpperCase()}
          </Button>
          <Button size="small" onClick={handleSubmit}>
            {"remover".toUpperCase()}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
