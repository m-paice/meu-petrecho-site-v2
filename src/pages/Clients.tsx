import { ClientsList } from "../components/ClientsList";
import { ClientsDetails } from "../components/ClientsDetails";
import { ClientsForm } from "../components/ClientsForm";
import { ClientsFilter } from "../components/ClientsFilter";
import { useRequestFindMany } from "../hooks/useRequestFindMany";
import { useEffect } from "react";
import { Loading } from "../components/Loading";
import { ResponseAPI } from "../types/ResponseAPI";

export interface Client {
  id: string;
  name: string;
  cellPhone: string;
  birthDate: string;
}

export function Clients() {
  const {
    execute: executeFindMany,
    response: clients,
    loading: loadingClients,
  } = useRequestFindMany<ResponseAPI<Client[]>>({
    path: "/users",
  });

  useEffect(() => {
    if (window.location.pathname === "/clients") executeFindMany();
  }, [window.location.pathname]);

  return (
    <div>
      <Loading isLoading={loadingClients} />
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
          <ClientsForm />
          <ClientsFilter />
        </div>
        <ClientsList clients={clients?.data || []} />
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
