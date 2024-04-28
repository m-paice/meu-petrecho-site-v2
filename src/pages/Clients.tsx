import { useEffect, useState } from "react";
import { useRequestFindMany } from "../hooks/useRequestFindMany";
import { ResponseAPI } from "../types/ResponseAPI";
import { ClientsList } from "../components/ClientsList";
import { ClientsDetails } from "../components/ClientsDetails";
import { ClientsForm } from "../components/ClientsForm";
import { ClientsFilter } from "../components/ClientsFilter";
import { Loading } from "../components/Loading";

export interface Client {
  id: string;
  name: string;
  cellPhone: string;
  birthDate: string;
}

export function Clients() {
  const [data, setData] = useState<Client[]>([]);

  const {
    execute: executeFindMany,
    response: clients,
    loading: loadingClients,
  } = useRequestFindMany<ResponseAPI<Client[]>>({
    path: "/users",
  });

  useEffect(() => {
    if (clients?.data) {
      setData((prevState) => [...prevState, ...clients.data]);
    }
  }, [clients?.data]);

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
        <ClientsList
          clients={{
            data,
            page: clients?.currentPage || 1,
            lastPage: clients?.lastPage || 1,
          }}
          executeClients={executeFindMany}
        />
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
