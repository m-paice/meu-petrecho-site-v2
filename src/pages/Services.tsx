import { useEffect, useState } from "react";

import { ServicesList } from "../components/ServicesList";
import { ServicesDetails } from "../components/ServicesDetails";
import { ServicesForm } from "../components/ServicesForm";
import { ServicesFilter } from "../components/ServicesFilter";
import { Loading } from "../components/Loading";
import { useRequestFindMany } from "../hooks/useRequestFindMany";
import { ResponseAPI } from "../types/ResponseAPI";

export interface Service {
  id: string;
  name: string;
  price: number;
  averageTime: number;
}

export function Services() {
  const [data, setData] = useState<Service[]>([]);

  const {
    execute: executeFindManyServices,
    response: services,
    loading,
  } = useRequestFindMany<ResponseAPI<Service[]>>({
    path: "/services",
  });

  useEffect(() => {
    if (services?.data) {
      setData((prevState) => [...prevState, ...services.data]);
    }
  }, [services?.data]);

  useEffect(() => {
    if (window.location.pathname === "/services") executeFindManyServices();
  }, [window.location.pathname]);

  return (
    <div>
      <Loading isLoading={loading} />
      <div style={styles.container}>
        <h4
          style={{
            fontSize: 24,
            fontWeight: "400",
          }}
        >
          Serviços
        </h4>
      </div>
      <div style={styles.grid}>
        <div style={styles.wrapperActions}>
          <ServicesForm />
          <ServicesFilter />
        </div>
        <ServicesList
          services={{
            data,
            page: services?.currentPage || 1,
            lastPage: services?.lastPage || 1,
          }}
          executeServices={executeFindManyServices}
        />
        <ServicesDetails />
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
