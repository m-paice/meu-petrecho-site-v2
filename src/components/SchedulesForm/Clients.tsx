import InfiniteScroll from "react-infinite-scroll-component";

import { Client, Fields } from ".";
import { Search } from "./Search";
import { ResponseAPI } from "../../types/ResponseAPI";

interface Props {
  clients: ResponseAPI<Client[]> | null;
  clientsPaginated: {
    data: Client[];
    page: number;
  };
  executeClients({ page }: { page: number }): void;
  setFieldValue: (field: string, value: unknown) => void;
  values: Fields;
}

export function Clients({
  clients,
  clientsPaginated,
  executeClients,
  setFieldValue,
  values,
}: Props) {
  return (
    <div
      style={{
        borderRight: "1px solid #e6e6e6",
        height: 400,
        paddingRight: 10,
      }}
    >
      <h4>{"clientes".toUpperCase()}</h4>

      <Search />

      <InfiniteScroll
        dataLength={clientsPaginated.data.length}
        next={() => {
          if (clientsPaginated.page < (clients?.lastPage || 0)) {
            executeClients({
              page: clientsPaginated.page + 1,
            });
          }
        }}
        hasMore={clientsPaginated.page < (clients?.lastPage || 0)}
        loader={<h4>Carregando...</h4>}
        height={335}
      >
        {clientsPaginated.data.map((user) => (
          <div
            key={user.id}
            style={{
              borderBottom: "1px solid #e6e6e6",
              paddingBlock: 10,
              cursor: "pointer",
              color: values.user?.id === user.id ? "#e34954" : "black",
            }}
            onClick={() => setFieldValue("user", user)}
          >
            <p>{user.name}</p>
            <span
              style={{
                color: values.user?.id === user.id ? "#e34954" : "black",
                fontSize: 12,
              }}
            >
              {user.cellPhone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}
            </span>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
