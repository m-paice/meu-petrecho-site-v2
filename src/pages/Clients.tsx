import { ClientsList } from "../components/ClientsList";
import { ClientsDetails } from "../components/ClientsDetails";
import { ClientsNew } from "../components/ClientsNew";
import { ClientsFilter } from "../components/ClientsFilter";

const clients = [
  {
    id: "1",
    name: "João",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "2",
    name: "Maria",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "3",
    name: "José",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "4",
    name: "João",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "5",
    name: "Maria",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "6",
    name: "José",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "7",
    name: "João",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "8",
    name: "Maria",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "9",
    name: "José",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "5",
    name: "Maria",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "6",
    name: "José",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "7",
    name: "João",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "8",
    name: "Maria",
    phone: "99999999999",
    birthday: "january",
  },
  {
    id: "9",
    name: "José",
    phone: "99999999999",
    birthday: "january",
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
    gridTemplateColumns: "200px 400px 1fr",
    gridTemplateRows: "calc(100vh - 200px)",
  },
  wrapperActions: {
    borderRight: "1px solid #e6e6e6",

    paddingRight: 10,
  },
};
