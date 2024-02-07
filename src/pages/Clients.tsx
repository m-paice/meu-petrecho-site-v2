import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Table } from "../components/Table";

const clients = [
  {
    id: 1,
    name: "João",
    phone: "11999999999",
    email: "joao@email.com",
  },
  {
    id: 2,
    name: "Maria",
    phone: "11999999999",
    email: "maria@email.com",
  },
  {
    id: 3,
    name: "José",
    phone: "11999999999",
    email: "jose@email.com",
  },
];

export function Clients() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          backgroundColor: "#e6e6e6",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <h4
          style={{
            fontSize: 24,
          }}
        >
          Clientes
        </h4>
        <div>
          <Button
            title="novo cliente"
            onClick={() => navigate("/clients/new")}
          />
        </div>
      </div>

      <Table
        data={clients}
        headers={[
          { key: "name", title: "Nome" },
          {
            key: "phone",
            title: "Telefone",
            formated: (phone: string) =>
              phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"),
          },
          { key: "email", title: "E-mail" },
        ]}
        actions={[
          {
            title: "Editar",
            name: "edit",
            onClick: (id: string) => navigate(`/clients/${id}/edit`),
          },
          {
            title: "Excluir",
            name: "delete",
            onClick: (id: string) => navigate(`/clients/${id}/delete`),
          },
        ]}
      />
    </div>
  );
}
