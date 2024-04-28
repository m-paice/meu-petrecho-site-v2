import InfiniteScroll from "react-infinite-scroll-component";

import { Fields, Service } from ".";
import { Search } from "./Search";
import { ResponseAPI } from "../../types/ResponseAPI";

interface Props {
  services: ResponseAPI<Service[]> | null;
  servicesPaginated: {
    data: Service[];
    page: number;
  };
  executeServices({ page }: { page: number }): void;
  setFieldValue: (field: string, value: unknown) => void;
  values: Fields;
}

export function Services({
  services,
  servicesPaginated,
  executeServices,
  setFieldValue,
  values,
}: Props) {
  return (
    <div
      style={{
        borderRight: "1px solid #e6e6e6",
        height: 400,
        paddingInline: 10,
      }}
    >
      <h4>{"serviços".toUpperCase()}</h4>
      <Search />
      <InfiniteScroll
        dataLength={servicesPaginated.data.length}
        next={() => {
          if (servicesPaginated.page < (services?.lastPage || 0)) {
            executeServices({
              page: servicesPaginated.page + 1,
            });
          }
        }}
        hasMore={servicesPaginated.page < (services?.lastPage || 0)}
        loader={<h4>Carregando...</h4>}
        height={335}
      >
        {servicesPaginated.data.map((service) => (
          <div
            key={service.id}
            style={{
              borderBottom: "1px solid #e6e6e6",
              paddingBlock: 10,
              cursor: "pointer",
              color: values.services.some((item) => item.id === service.id)
                ? "#e34954"
                : "black",
            }}
            onClick={() => {
              if (values.services.some((item) => item.id === service.id)) {
                setFieldValue(
                  "services",
                  values.services.filter((item) => item.id !== service.id)
                );
              } else {
                setFieldValue("services", [...values.services, service]);
              }
            }}
          >
            <p>{service.name}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
