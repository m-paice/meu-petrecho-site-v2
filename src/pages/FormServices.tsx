import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function FormServices() {
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
        <h1>{id ? "Atualizando serviço" : "Novo serviço"}</h1>

        <form
          onSubmit={() => navigate("/services")}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 40,
          }}
        >
          <Input
            label="Nome"
            placeholder="Digite o nome do serviço"
            id="name"
          />
          <Input
            label="Valor"
            placeholder="Digite o valor do serviço"
            id="price"
          />
          <Input
            label="Tempo de atendimento"
            placeholder="Digite o tempo de atendimento do serviço"
            id="time"
          />
          <Button title="Salvar" />
        </form>
      </div>
    </div>
  );
}
