import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function FormClients() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
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
        <h1>{id ? "Atualizando cliente" : "Novo cliente"}</h1>

        <form
          onSubmit={() => navigate("/clients")}
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
            id="name"
          />
          <Input
            label="Telefone"
            placeholder="Digite o telefone do cliente"
            id="cellPhone"
          />
          <Input
            label="Mês de aniversário"
            placeholder="Digite o mês de aniversário do cliente"
            id="birthMonth"
          />
          <Button title="Salvar" />
        </form>
      </div>
    </div>
  );
}
