import { ClientsList } from "../components/ClientsList";
import { ClientsDetails } from "../components/ClientsDetails";
import { ClientsNew } from "../components/ClientsNew";
import { ClientsFilter } from "../components/ClientsFilter";

const clients = [
  {
    id: "1",
    name: "Rafael Oliveira",
    cellPhone: "(11) 99999-9999",
  },
  {
    id: "2",
    name: "João Silva",
    cellPhone: "(11) 99999-9999",
  },
  {
    id: "3",
    name: "Maria Santos",
    cellPhone: "(11) 99999-9999",
  },
  {
    id: "4",
    name: "José Pereira",
    cellPhone: "(11) 99999-9999",
  },
  {
    id: "5",
    name: "Fernanda Oliveira",
    cellPhone: "(11) 99999-9999",
  },
];

export function Clients() {
  return (
    <div>
      <div style={styles.container}>
        <h4
          style={{
            fontSize: 24,
            fontWeight: "400",
          }}
        >
          Clientes
        </h4>
      </div>
      <div style={styles.grid}>
        <div style={styles.wrapperActions}>
          <ClientsNew />
          <ClientsFilter />
        </div>
        <ClientsList clients={clients} />
        <ClientsDetails />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ebf3fe",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "200px 300px 1fr",
    gridTemplateRows: "calc(100vh - 200px)",
  },
  wrapperActions: {
    borderRight: "1px solid #e6e6e6",
    paddingRight: 10,
  },
};
