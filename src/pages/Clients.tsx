import { Button } from "../components/Button";
import { Table } from "../components/Table";

const clients = [
  {
    id: 1,
    name: "João",
    phone: "11 99999-9999",
    email: "joao@email.com",
  },
  {
    id: 2,
    name: "Maria",
    phone: "11 99999-9999",
    email: "maria@email.com",
  },
  {
    id: 3,
    name: "José",
    phone: "11 99999-9999",
    email: "jose@email.com",
  },
];

export function Clients() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#D9D9D9",
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
          <Button title="novo cliente" />
        </div>
      </div>

      <Table
        data={clients}
        headers={[
          { key: "name", title: "Nome" },
          { key: "phone", title: "Telefone" },
          { key: "email", title: "E-mail" },
        ]}
      />
    </div>
  );
}
