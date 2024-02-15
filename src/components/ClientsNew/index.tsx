import { Button } from "../Button";
import { useState } from "react";
import { Modal } from "../Modal";
import { Input } from "../Input";

export function ClientsNew() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button title="Novo cliente" onClick={() => setOpen(!open)} />

      <Modal
        title="Novo cliente"
        isOpen={open}
        closeModal={() => setOpen(false)}
        size="medium"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 700,
            }}
          >
            <form
              onSubmit={() => {}}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                marginTop: 40,
              }}
            >
              <Input
                label="Nome"
                placeholder="Digite o nome do cliente"
                name="name"
              />
              <Input
                label="Telefone"
                placeholder="Digite o telefone do cliente"
                name="cellPhone"
              />
              <Input
                label="Mês de aniversário"
                placeholder="Digite o mês de aniversário do cliente"
                name="birthMonth"
              />
              <Button title="Salvar" />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
