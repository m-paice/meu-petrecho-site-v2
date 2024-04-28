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

  const {
    execute: executeFindManyServicesFiltered,
    response: servicesFiltered,
    loading: loadingFiltered,
  } = useRequestFindMany<ResponseAPI<Service[]>>({
    path: "/services",
  });

  useEffect(() => {
    if (services?.data) {
      setData((prevState) => [...prevState, ...services.data]);
    }
  }, [services?.data]);

  useEffect(() => {
    if (window.location.pathname === "/services") {
      setData([]);
      executeFindManyServices();
    }
  }, [window.location.pathname]);

  return (
    <div>
      <Loading isLoading={loading || loadingFiltered} />
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
            data: servicesFiltered?.data.length ? servicesFiltered.data : data,
            page: servicesFiltered?.data.length
              ? servicesFiltered.currentPage
              : services?.currentPage || 1,
            lastPage: servicesFiltered?.data.length
              ? servicesFiltered.lastPage
              : services?.lastPage || 1,
          }}
          noSearchValues={servicesFiltered?.data.length === 0}
          executeServices={executeFindManyServices}
          executeServicesFiltered={executeFindManyServicesFiltered}
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
